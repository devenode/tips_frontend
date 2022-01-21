import { useState, useMemo } from 'react';
import { createEditor } from 'slate';
import { Slate, withReact } from 'slate-react';
import { withHistory } from 'slate-history';

const SlateContext = ({ children }) => {
   const editor = useMemo(() => withReact(withHistory(createEditor())), []);
   const [value, setValue] = useState([
      {
         type: `paragraph`,
         children: [{ text: `A line of text in a paragraph.` }],
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