import { useCallback } from 'react';
import { Editable } from 'slate-react';
import Code from './Blocks/Code';
import Paragraph from './Blocks/Paragraph';

const TextEditor = props => {
   const renderElement = useCallback(props => {
      switch (props.element.type) {
         case `code`:
            return <Code {...props} />
         default:
            return <Paragraph {...props} />
      }
   }, []);

   const onKeyDown = useCallback(e => {
      console.log(e.key);
   }, []);



   return (
      <Editable
         renderElement={renderElement}
         onKeyDown={onKeyDown}
      />
   )
}

export default TextEditor;