import { useState, useMemo, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import withInlines from './withInlines';
import { EMPTY_DOC } from './constants';
import { useSelection } from './utils';

const SlateContext = ({ children }) => {
   const editor = useMemo(() => withInlines(withReact(withHistory(createEditor()))), []);
   const [value, setValue] = useState(EMPTY_DOC);
   const [selection, setSelection] = useSelection(editor)

   const onChangeHandler = useCallback(
      (newValue) => {
         setValue(newValue);
         setSelection(selection);
      },
      [selection, setSelection]
   );

   return (
      <Slate
         editor={editor}
         value={value}
         onChange={onChangeHandler}>

         {children}

      </Slate>
   )
}

export default SlateContext;