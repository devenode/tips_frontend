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

const toggleBlock = (editor, { format, align }) => {
   const isActive = isBlockActive(editor, format);
   const isList = LIST_TYPES.includes(format);

   const newProperties = {
      type: isActive ? TAGS.P : isList ? TAGS.LI : format,
   }

   if (!format && align) {
      const { selection } = editor;
      if (!selection) return;

      const currentNode = editor.children[selection.anchor.path[0]];

      const allowedNodes = [
         TAGS.P,
         TAGS.H1,
         TAGS.H2,
         TAGS.H3,
      ]
      if (allowedNodes.includes(currentNode.type)) {
         newProperties.type = currentNode.type;
         newProperties.children = currentNode.children;
         newProperties.align = align;
      } else return;
   }

   Transforms.unwrapNodes(editor, {
      match: n =>
         !Editor.isEditor(n) &&
         Element.isElement(n) &&
         LIST_TYPES.includes(n.type),
      split: true,
   });

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