import { Editor, Transforms } from 'slate';

export const getTextStyle = editor => {
   const styles = Editor.marks(editor);
   return styles;
}

export const getBlocksType = editor => {
   const { selection } = editor;
   if (selection == null) return null;

   const topLevelBlockNodesInSelection = Editor.nodes(editor, {
      at: selection,
      mode: `highest`,
      match: n => Editor.isBlock(editor, n),
   });

   let blockType = null;
   let block = topLevelBlockNodesInSelection.next();

   while (!block.done) {
      const [node] = block.value;

      if (blockType === null) {
         blockType = node.type;
      } else if (blockType !== node.type) {
         return `multiple`;
      }

      block = topLevelBlockNodesInSelection.next();
   }

   return blockType;
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