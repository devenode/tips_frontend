import { Editor, Transforms } from 'slate';
import { useSlateStatic } from 'slate-react';


export const CodeButton = props => {
   const editor = useSlateStatic();

   const handleClick = e => {
      Transforms.setNodes(
         editor,
         { type: `code` },
         { match: node => Editor.isBlock(editor, node) }
      )
   }

   return (
      <button onClick={handleClick}>Code</button>
   )
}

export default CodeButton;




