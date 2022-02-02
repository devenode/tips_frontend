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
import clear from '../../icons/clear.svg';
import { TEXT_STYLES } from './StyleButton';

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
   clear,
   [`numbered-list`]: numbered_list,
   [`bulleted-list`]: bulleted_list
}

export const CLEAR = `clear`;

export const BlockButton = props => {
   const { format } = props;
   const editor = useSlate();
   const isActive = isBlockActive(editor, format);

   const handleClick = e => {
      toggleBlock(editor, format, e);
   }

   return (
      HEADINGS.includes(format) ? 
      
      <div
         className={isActive ? s.activeBtn : null}
         onMouseDown={handleClick}
      >{format}</div> :

      <button
         className={isActive ? s.activeBtn : null}
         onMouseDown={handleClick}
      >
         <img src={icons[format]} alt={format} />  
      </button>
   )
}

const toggleBlock = (editor, format, e) => {
   e.preventDefault();

   if (format === CLEAR) {
      for (const style in TEXT_STYLES) {
         if (Object.hasOwnProperty.call(TEXT_STYLES, style)) {
            Editor.removeMark(editor, style);    
         }
      }

      Transforms.unwrapNodes(editor, {
         match: n =>
            !Editor.isEditor(n) &&
            Element.isElement(n) &&
            (LIST_TYPES.includes(n.type) ||
            TAGS.PRE === n.type || 
            TAGS.A === n.type),
         split: true,
      });

      Transforms.unsetNodes(editor, `align`, {
         match: n =>
            !Editor.isEditor(n) &&
            Element.isElement(n) &&
            n.align,
      })

      Transforms.setNodes(editor, { type: TAGS.P });
      return;
   }

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
}

const isBlockActive = (editor, format) => {
   const { selection } = editor;
   if (!selection || format === CLEAR) return false;

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