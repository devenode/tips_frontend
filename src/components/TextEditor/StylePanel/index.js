import { Editor, Element } from 'slate';
import { useSlate } from 'slate-react';
import s from './styles.module.css';

export const StylePanel = () => {

   return (
      <div className={s.stylePanelBox}>
         <StyleButton format="bold" />
         <StyleButton format="italic" />
         <StyleButton format="underline" />

         <BlockButton format="bulleted-list" />
      </div>
   )
}

const isStyleActive = (editor, format) => {
   const marks = Editor.marks(editor);
   return marks ? marks[format] === true : false;
}

const isBlockActive = (editor, format) => {
   const { selection } = editor;

   console.log(selection)

   if (!selection) return false;

   const [match] = Array.from(
      Editor.nodes(editor, {
         at: Editor.unhangRange(editor, selection),
         match: n =>
            !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
      })
   )

   return !!match
}

const toggleStyle = (editor, format) => {
   const isActive = isStyleActive(editor, format);

   if (isActive) {
      Editor.removeMark(editor, format);
   } else {
      Editor.addMark(editor, format, true);
   }
}

const toggleBlock = (editor, format) => {
   
   
}

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

export const BlockButton = ({ format }) => {
   const editor = useSlate();

   return (
      <button
         active={isBlockActive(editor, format).toString()}
         onClick={e => toggleBlock(editor, format)}
      >
         {format}
      </button>
   )
}

export default StylePanel;