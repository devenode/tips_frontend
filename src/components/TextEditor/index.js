import { useCallback } from 'react';
import { Editable } from 'slate-react';
import Leaf from './Leaf';
import Block from './Block';


const TextEditor = props => {
   const renderElement = useCallback(props => <Block {...props} />, []);
   const renderLeaf = useCallback(props => <Leaf {...props} />, []);
   const onKeyDown = useCallback(e => {}, []);


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