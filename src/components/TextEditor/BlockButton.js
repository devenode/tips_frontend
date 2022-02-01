import { useSlate } from 'slate-react';
import { Editor, Element, Transforms } from 'slate';
import TAGS from './elements';
import s from './StylePanel/styles.module.css';
import blockquote from '../../icons/blockquote.svg';
import right from '../../icons/right.svg';
import center from '../../icons/center.svg';
import left from '../../icons/left.svg';
import preformatted from '../../icons/preformatted.svg';
import numbered_list from '../../icons/numbered_list.svg';
import bulleted_list from '../../icons/bulleted_list.svg';
import { setChosen } from '../../actions/dropdown';
import { useDispatch } from 'react-redux';



export const TEXT_ALIGN = { 
   left: `left`,
   center: `center`,
   right: `right`
}

export const LIST_TYPES = [TAGS.OL, TAGS.UL];

export const HEADINGS = [TAGS.H1, TAGS.H2, TAGS.H3];

export const icons = {
   blockquote,
   right,
   center,
   left,
   preformatted,
   [`numbered-list`]: numbered_list,
   [`bulleted-list`]: bulleted_list
}

export const BlockButton = props => {
   const { format } = props;
   const editor = useSlate();
   const isActive = isBlockActive(editor, format);

   return (
      HEADINGS.includes(format) ? 
      
      <div
         className={isActive ? s.activeBtn : null}
         onMouseDown={e => toggleBlock(editor, props, e)}
      >{format}</div> :

      <button
         className={isActive ? s.activeBtn : null}
         onMouseDown={e => toggleBlock(editor, props, e)}
      >
         <img src={icons[format]} alt={format} />  
      </button>
   )
}

const toggleBlock = (editor, { format }, e) => {
   e.preventDefault();

   // const dispatch = useDispatch();

   const isActive = isBlockActive(editor, format);
   const isList = LIST_TYPES.includes(format);
   const isPre = format === TAGS.PRE;

   const newProperties = {
      type: isActive ? TAGS.P :
            isList ? TAGS.LI :
            isPre ? TAGS.P :
            format
   }

   if (TEXT_ALIGN[format]) {
      const { selection } = editor;
      if (!selection) return;

      const currentNode = editor.children[selection.anchor.path[0]];

      const allowedNodes = [
         TAGS.P,
         TAGS.H1,
         TAGS.H2,
         TAGS.H3,
      ]
      if (allowedNodes.includes(currentNode.type)) {
         newProperties.type = currentNode.type;
         newProperties.children = currentNode.children;
         newProperties.align = TEXT_ALIGN[format];
      } else return;
   }

   Transforms.unwrapNodes(editor, {
      match: n =>
         !Editor.isEditor(n) &&
         Element.isElement(n) &&
         (LIST_TYPES.includes(n.type) ||
         TAGS.PRE === n.type),
      split: true,
   });

   Transforms.setNodes(editor, newProperties);

   if (!isActive && (isList || isPre)) {
      const block = { type: format, children: [] }
      Transforms.wrapNodes(editor, block);
   }

   if (HEADINGS.includes(format)) {
      // dispatch(setChosen(format));
   }
}

const isBlockActive = (editor, format) => {
   const { selection } = editor;
   if (!selection) return false;

   const [match] = Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n =>
         !Editor.isEditor(n) &&
         Element.isElement(n) &&
         n.type === format,
   });

   return !!match;
}

export default BlockButton;