import { Editor, Transforms, Node, Text } from 'slate';
import { useSlate } from 'slate-react';
import { Fragment, useState, useCallback } from 'react';
import Block from './Block';
import Leaf from './Leaf';

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

export const serializeToText = nodes => {
   return nodes.map(n => Node.string(n)).join('\n')
}

export const serializeToJSX = node => {
   if (Text.isText(node)) {
      return <Leaf leaf={node} children={node.text} />
   }

   const children = node.children.map((n, i) => <Fragment key={i}>{serializeToJSX(n)}</ Fragment>);
   return <Block element={node} children={children} />
}

export const useSelection = initSelection => {
   const [selection, setSelection] = useState(initSelection);

   const setSelectionOptimized = useCallback(
      (newSelection) => {
         // Any optimization here for selection

         setSelection(newSelection);
      },
      [setSelection]
   );

   return [selection, setSelectionOptimized];
}