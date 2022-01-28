import { Editor } from 'slate';
import isHotkey from 'is-hotkey';

export const HOTKEYS = {
   'mod+b': `bold`,
   'mod+i': `italic`,
   'mod+u': `underline`
}

export const handleHotkeyPress = (editor, e) => {
   for (const hotkey in HOTKEYS) {
      if (isHotkey(hotkey, e)) {
         e.preventDefault();
         const mark = HOTKEYS[hotkey];
         toggleMark(editor, mark);
      }
   }

}

export const isMarkActive = (editor, format) => {
   const marks = Editor.marks(editor);
   return marks ? marks[format] === true : false;
}

export const toggleMark = (editor, format) => {
   const isActive = isMarkActive(editor, format);

   if (isActive) {
      Editor.removeMark(editor, format);
   } else {
      Editor.addMark(editor, format, true);
   }
}

export default HOTKEYS;