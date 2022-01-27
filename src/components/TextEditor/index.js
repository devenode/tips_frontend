import { useCallback } from 'react';
import { Editable, useSlate } from 'slate-react';
import Leaf from './Leaf';
import Block from './Block';
import { stepInOutFromInline } from './withInlines';


const TextEditor = props => {
   const editor = useSlate();

   const renderElement = useCallback(props => <Block {...props} />, []);
   const renderLeaf = useCallback(props => <Leaf {...props} />, []);
   const onKeyDown = useCallback(e => stepInOutFromInline(editor, e), [editor]);

   return (
      <Editable
         spellCheck
         autoFocus
         placeholder="New paragraph…"
         renderElement={renderElement}
         onKeyDown={onKeyDown}
         renderLeaf={renderLeaf}
      />
   )
}

export default TextEditor;