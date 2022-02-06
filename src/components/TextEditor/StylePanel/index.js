import StyleButton from '../StyleButton';
import BlockButton from '../BlockButton';
import LinkButton from '../LinkButton';
import s from './styles.module.css';
import { HEADINGS_BTNS, TEXT_ALIGN_BTNS, LIST_TYPES_BTNS, TAGS, TEXT_STYLES, CLEAR } from '../constants';
import Dropdown, { useLabel } from '../../Dropdown';

export const StylePanel = () => {
   
   return (
      <div className={s.stylePanelBox}>
         <Dropdown options={HEADINGS_BTNS} label={useLabel(`heading`)}/>
         <StyleButton format={TEXT_STYLES.bold} />
         <StyleButton format={TEXT_STYLES.italic} />
         <StyleButton format={TEXT_STYLES.underline} />
         <StyleButton format={TEXT_STYLES.strike} />
         <LinkButton />
         <Dropdown options={TEXT_ALIGN_BTNS} label={useLabel(`align`)}/>
         <BlockButton format={TAGS.PRE} />
         <BlockButton format={TAGS.BLOCKQUOTE} />
         <Dropdown options={LIST_TYPES_BTNS} label={useLabel(`list`)}/>
         <BlockButton format={CLEAR} />
      </div>
   )
}

export default StylePanel;