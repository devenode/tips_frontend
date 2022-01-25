import { useSlate } from 'slate-react';
import { Editor, Transforms, Element, Range } from 'slate';

export const LinkButton = () => {
   const editor = useSlate();

   return (
      <button
         active={isLinkActive(editor).toString()}
         onClick={() => toggleLink(editor)}
      >
         link
      </button>
   )
}

export const toggleLink = (editor, url) => {
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

   const isCollapsed = selection && Range.isCollapsed(selection);
   const link = {
      type: `link`,
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