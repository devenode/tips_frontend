import { useState, useMemo } from 'react';
import { createEditor } from 'slate';
import { Slate, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import withInlines from './withInlines';

const SlateContext = ({ children }) => {
   const editor = useMemo(() => withInlines(withReact(withHistory(createEditor()))), []);
   const [value, setValue] = useState([
      {
         type: `paragraph`,
         children: [{ text: `` }],
      },
   ]);

   return (
         <Slate
            editor={editor}
            value={value}
            onChange={newValue => setValue(newValue)}>

               { children }

         </Slate>
   )
}

export default SlateContext;