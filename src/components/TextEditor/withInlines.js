import { toggleLink } from './LinkButton';
import isUrl from 'is-url';

export const withInlines = editor => {
   const { insertData, insertText, isInline } = editor;

   editor.isInline = element =>
      [`link`].includes(element.type) || isInline(element);

   editor.insertText = text => {
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
      } else {
         insertData(data);
      }
   }

   return editor;
}

export default withInlines;