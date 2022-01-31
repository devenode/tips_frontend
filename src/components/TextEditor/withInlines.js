import { Range, Transforms } from 'slate';
import { isKeyHotkey } from 'is-hotkey';
import { toggleLink } from './LinkButton';
import isUrl from 'is-url';

export const withInlines = editor => {
   const { insertData, insertText, isInline } = editor;

   editor.isInline = element =>
      [`link`].includes(element.type) || isInline(element);

   editor.insertText = text => {
      if (!text.length) return;

      if (text && isUrl(text)) {
         toggleLink(editor, text);
      } else {
         insertText(text);
      }
   }

   editor.insertData = data => {
      const text = data.getData(`text/plain`);

      if (text && isUrl(text)) {
         toggleLink(editor, text);

      } else if (text) {
         const noEmptyStrings = text.split(`\n`).filter(str => str.length);
         const dataTrans = new DataTransfer();
         dataTrans.setData(`text/plain`, noEmptyStrings.join(`\n`));         
         insertData(dataTrans);

      } else {
         insertData(data);
      }
   }

   return editor;
}

export const stepInOutFromInline = (editor, e) => {
   // Default left/right behavior is unit:'character'.
   // This fails to distinguish between two cursor positions, such as
   // <inline>foo<cursor/></inline> vs <inline>foo</inline><cursor/>.
   // Here we modify the behavior to unit:'offset'.
   // This lets the user step into and out of the inline without stepping over characters.
   // You may wish to customize this further to only use unit:'offset' in specific cases.

   const { selection } = editor;

   if (selection && Range.isCollapsed(selection)) {
      const { nativeEvent } = e;
      if (isKeyHotkey(`space`, nativeEvent)) {
         Transforms.move(editor, { unit: `offset` });
         return;
      }
      if (isKeyHotkey(`enter`, nativeEvent)) {
         Transforms.move(editor, { unit: `offset` });
         return;
      }
   }
}

export default withInlines;