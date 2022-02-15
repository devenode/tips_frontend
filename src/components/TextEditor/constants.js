import bold from '../../icons/bold.svg';
import italic from '../../icons/italic.svg';
import underline from '../../icons/underline.svg';
import strike from '../../icons/strike.svg';
import blockquote from '../../icons/blockquote.svg';
import right from '../../icons/right.svg';
import center from '../../icons/center.svg';
import left from '../../icons/left.svg';
import preformatted from '../../icons/preformatted.svg';
import numbered_list from '../../icons/numbered_list.svg';
import bulleted_list from '../../icons/bulleted_list.svg';
import clear from '../../icons/clear.svg';
import BlockButton from './BlockButton';

export const TAGS = {
   P: `Paragraph`,
   A: `link`,
   BLOCKQUOTE: `blockquote`,
   H1: `Heading 1`,
   H2: `Heading 2`,
   H3: `Heading 3`,
   H4: `heading 4`,
   H5: `Heading 5`,
   H6: `Heading 6`,
   LI: `list-item`,
   UL: `bulleted-list`,
   OL: `numbered-list`,
   PRE: `preformatted`,
}

export const TEXT_STYLES = {
   bold: `bold`,
   italic: `italic`,
   underline: `underline`,
   strike: `strike`
}

export const HOTKEYS = {
   'mod+b': TEXT_STYLES.bold,
   'mod+i': TEXT_STYLES.italic,
   'mod+u': TEXT_STYLES.underline
}

export const TEXT_ALIGN = {
   left: `left`,
   center: `center`,
   right: `right`
}

export const CLEAR = `clear`;

export const ICONS = {
   bold,
   italic,
   underline,
   strike,
   blockquote,
   right,
   center,
   left,
   preformatted,
   clear,
   [`numbered-list`]: numbered_list,
   [`bulleted-list`]: bulleted_list
}

export const LIST_TYPES = [TAGS.OL, TAGS.UL];

export const HEADINGS = [TAGS.H1, TAGS.H2, TAGS.H3];

export const HEADINGS_BTNS = [
   <BlockButton format={TAGS.H1} />,
   <BlockButton format={TAGS.H2} />,
   <BlockButton format={TAGS.H3} />
];

export const LIST_TYPES_BTNS = [
   <BlockButton format={TAGS.UL} />,
   <BlockButton format={TAGS.OL} />
];

export const TEXT_ALIGN_BTNS = [
   <BlockButton format={TEXT_ALIGN.left} />,
   <BlockButton format={TEXT_ALIGN.center} />,
   <BlockButton format={TEXT_ALIGN.right} />
];

export const EMPTY_DOC = [
   {
      type: TAGS.P,
      children: [{ text: `` }],
   },
];

export const ZERO_SELECTION = {
   anchor: { path: [0, 0], offset: 0 },
   focus: { path: [0, 0], offset: 0 }
}