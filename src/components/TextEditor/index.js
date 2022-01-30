import { useCallback } from 'react';
import { Editable, useSlate } from 'slate-react';
import Leaf from './Leaf';
import Block from './Block';
import { stepInOutFromInline } from './withInlines';
import { handleHotkeyPress } from './hotkeys';
import s from './styles.module.css';

const TextEditor = props => {
   const editor = useSlate();

   const renderElement = useCallback(props => <Block {...props} />, []);
   const renderLeaf = useCallback(props => <Leaf {...props} />, []);
   const onKeyDown = useCallback(e => {
      stepInOutFromInline(editor, e);
      handleHotkeyPress(editor, e);
   }, [editor]);

   return (
      <div className={s.editorBox}>
         <Editable
            spellCheck
            autoFocus
            placeholder="New paragraph…"
            renderElement={renderElement}
            onKeyDown={onKeyDown}
            renderLeaf={renderLeaf}
         />
      </div>
   )
}

export default TextEditor;