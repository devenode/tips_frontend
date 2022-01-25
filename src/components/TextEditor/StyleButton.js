import { useSlate } from 'slate-react';
import { Editor } from 'slate';

export const StyleButton = ({ format }) => {
   const editor = useSlate();

   return (
      <button
         active={isStyleActive(editor, format).toString()}
         onClick={e => toggleStyle(editor, format)}
      >
         {format}
      </button>
   )
}

const isStyleActive = (editor, format) => {
   const marks = Editor.marks(editor);
   return marks ? marks[format] === true : false;
}

const toggleStyle = (editor, format) => {
   const isActive = isStyleActive(editor, format);

   if (isActive) {
      Editor.removeMark(editor, format);
   } else {
      Editor.addMark(editor, format, true);
   }
}

export default StyleButton;