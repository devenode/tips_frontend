import { useSlate } from 'slate-react';
import { Editor } from 'slate';
import isHotkey from 'is-hotkey';
import s from './StylePanel/styles.module.css';
import { ICONS, HOTKEYS } from './constants';

export const StyleButton = ({ format }) => {
   const editor = useSlate();
   const isActive = isStyleActive(editor, format);

   return (
      <button
         className={isActive ? s.activeBtn : null}
         onMouseDown={e => toggleStyle(editor, format, e)}
      >
         <img src={ICONS[format]} alt={format} />
      </button>
   )
}

const isStyleActive = (editor, format) => {
   const marks = Editor.marks(editor);
   return marks ? marks[format] === true : false;
}

const toggleStyle = (editor, format, e) => {
   e.preventDefault();
   const isActive = isStyleActive(editor, format);

   if (isActive) {
      Editor.removeMark(editor, format);
   } else {
      Editor.addMark(editor, format, true);
   }
}

export const handleHotkeyPress = (editor, e) => {
   for (const hotkey in HOTKEYS) {
      if (isHotkey(hotkey, e)) {
         e.preventDefault();
         const mark = HOTKEYS[hotkey];
         toggleStyle(editor, mark, e);
      }
   }

}

export default StyleButton;