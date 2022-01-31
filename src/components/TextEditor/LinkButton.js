import { useSlate } from 'slate-react';
import { Editor, Transforms, Element, Range } from 'slate';
import TAGS from './elements';
import isUrl from 'is-url';
import link from '../../icons/link.svg';
import s from './StylePanel/styles.module.css';

export const LinkButton = () => {
   const editor = useSlate();
   const isActive = isLinkActive(editor);

   return (
      <button
         className={isActive ? s.activeBtn : null}
         onMouseDown={e => toggleLink(editor, null, e)}
      >
         <img src={link} alt="Link" />
      </button>
   )
}

export const toggleLink = (editor, url, e) => {
   if (e) e.preventDefault();

   if (isLinkActive(editor)) {
      Transforms.unwrapNodes(editor, {
         match: n =>
            !Editor.isEditor(n) &&
            Element.isElement(n) &&
            n.type === `link`
      });
      return;
   }

   const { selection } = editor;
   if (!selection) return;

   url = url || window.prompt(`Enter the URL of the link:`);
   if (!url) return;

   if (!isUrl(url)) {
      alert(`It doens't look like valid URL`);
      return;
   }

   const isCollapsed = selection && Range.isCollapsed(selection);
   const link = {
      type: TAGS.A,
      href: url,
      isBlank: true,
      children: isCollapsed ? [{ text: url }] : [],
   }

   if (isCollapsed) {
      Transforms.insertNodes(editor, link);
   } else {
      Transforms.wrapNodes(editor, link, { split: true });
      Transforms.collapse(editor, { edge: `end` });
   }
}

export const isLinkActive = editor => {
   const [link] = Editor.nodes(editor, {
      match: n =>
         !Editor.isEditor(n) &&
         Element.isElement(n) &&
         n.type === `link`,
   });

   return !!link;
}

export default LinkButton;