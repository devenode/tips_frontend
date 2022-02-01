import StyleButton from '../StyleButton';
import BlockButton from '../BlockButton';
import LinkButton from '../LinkButton';
import TAGS from '../elements';
import s from './styles.module.css';
import { TEXT_ALIGN } from '../BlockButton';
import { TEXT_STYLES } from '../StyleButton';
import Dropdown, { useLabel } from '../../Dropdown';

export const StylePanel = () => {
   const headings = [
      <BlockButton format={TAGS.H1} />,
      <BlockButton format={TAGS.H2} />,
      <BlockButton format={TAGS.H3} />,
      <BlockButton format={TAGS.P} />,
   ];
   
   const lists = [
      <BlockButton format={TAGS.UL} />,
      <BlockButton format={TAGS.OL} />
   ];
   
   const aligns = [
      <BlockButton format={TEXT_ALIGN.left} />,
      <BlockButton format={TEXT_ALIGN.center} />,
      <BlockButton format={TEXT_ALIGN.right} />
   ];

   return (
      <div className={s.stylePanelBox}>
         
         <Dropdown options={headings} label={useLabel(`heading`)}/>
         <StyleButton format={TEXT_STYLES.bold} />
         <StyleButton format={TEXT_STYLES.italic} />
         <StyleButton format={TEXT_STYLES.underline} />
         <StyleButton format={TEXT_STYLES.strike} />
         <LinkButton />
         <Dropdown options={aligns} label={useLabel(`align`)}/>
         <BlockButton format={TAGS.PRE} />
         <BlockButton format={TAGS.BLOCKQUOTE} />
         <Dropdown options={lists} label={useLabel(`list`)}/>

      </div>
   )
}

export default StylePanel;