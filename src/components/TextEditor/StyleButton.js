import { useSlate } from 'slate-react';
import { Editor } from 'slate';
import isHotkey from 'is-hotkey';
import bold from '../../icons/bold.svg';
import italic from '../../icons/italic.svg';
import underline from '../../icons/underline.svg';
import strike from '../../icons/strike.svg';
import s from './StylePanel/styles.module.css';

export const HOTKEYS = {
   'mod+b': `bold`,
   'mod+i': `italic`,
   'mod+u': `underline`
}

export const TEXT_STYLES = {
   bold: `bold`,
   italic: `italic`,
   underline: `underline`,
   strike: `strike`,
}

const icons = {
   bold,
   italic,
   underline,
   strike
}

export const StyleButton = ({ format }) => {
   const editor = useSlate();
   const isActive = isStyleActive(editor, format);

   return (
      <button
         className={isActive ? s.activeBtn : null}
         onMouseDown={e => toggleStyle(editor, format, e)}
      >
         <img src={icons[format]} alt={format} />
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