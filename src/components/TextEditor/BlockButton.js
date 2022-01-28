import { useSlate } from 'slate-react';
import { Editor, Element, Transforms } from 'slate';
import TAGS from './elements';
const LIST_TYPES = [TAGS.OL, TAGS.UL];

export const BlockButton = props => {
   const { format } = props;
   const editor = useSlate();

   return (
      <button
         active={isBlockActive(editor, format).toString()}
         onClick={e => toggleBlock(editor, props)}
      >
         {format}
      </button>
   )
}

const toggleBlock = (editor, { format, textAlign }) => {
   const isActive = isBlockActive(editor, format);
   const isList = LIST_TYPES.includes(format);

   Transforms.unwrapNodes(editor, {
      match: n =>
         !Editor.isEditor(n) &&
         Element.isElement(n) &&
         LIST_TYPES.includes(n.type),
      split: true,
   });

   const newProperties = {
      type: isActive ? TAGS.P : isList ? TAGS.LI : format,
   }

   if (textAlign) {
      newProperties.textAlign = textAlign;
   }

   Transforms.setNodes(editor, newProperties);

   if (!isActive && isList) {
      const block = { type: format, children: [] }
      Transforms.wrapNodes(editor, block);
   }
}

const isBlockActive = (editor, format) => {
   const { selection } = editor;
   if (!selection) return false;

   const [match] = Array.from(
      Editor.nodes(editor, {
         at: Editor.unhangRange(editor, selection),
         match: n =>
            !Editor.isEditor(n) &&
            Element.isElement(n) &&
            n.type === format,
      })
   );

   return !!match;
}

export default BlockButton;