import { Editor, Transforms } from 'slate';
import { useSlate } from 'slate-react';


export const BlocksPanel = props => {
   const editor = useSlate();

   const handleCodeClick = e => {
      const [match] = Editor.nodes(editor, {
         match: node => node.type === `code`,
      });

      Transforms.setNodes(
         editor,
         { type: match ? `paragraph` : `code` },
         { match: node => Editor.isBlock(editor, node) }
      );
   }

   return (
      <button onClick={handleCodeClick}>Code</button>
   )
}

export default BlocksPanel;