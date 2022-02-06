import { Editor, Transforms, Node } from 'slate';
import { useSlate } from 'slate-react';

export const getTextStyle = editor => {
   const styles = Editor.marks(editor);
   return styles;
}

export const useBlocksType = () => {
   const editor = useSlate();

   const block = {
      type: null,
      align: null
   }

   const { selection } = editor;
   if (selection === null) return block;

   const topLevelBlockNodesInSelection = Editor.nodes(editor, {
      at: selection,
      mode: `highest`,
      match: n => Editor.isBlock(editor, n),
   });

   let result = topLevelBlockNodesInSelection.next();

   while (!result.done) {
      const [node] = result.value;

      if (block.type === null) {
         block.type = node.type;
         block.align = node.align;
      } else if (block.type !== node.type) {
         block.type = `Multiple`;
         return block;
      }

      result = topLevelBlockNodesInSelection.next();
   }

   return block;
}

export const setBlocksType = (editor, type) => {
   const { selection } = editor;
   if (selection === null) return null;

   Transforms.setNodes(
      editor,
      { type },
      {
         at: selection,
         match: n => Editor.isBlock(editor, n)
      }
   );
}

export const getSelectedText = editor => {
   const { selection } = editor;
   if (!selection) return;

   const selectedText = Editor.string(editor, selection);
   return selectedText;
}

export const serialize = nodes => {
   return nodes.map(n => Node.string(n)).join('\n')
}