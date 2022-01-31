import StyleButton from '../StyleButton';
import BlockButton from '../BlockButton';
import LinkButton from '../LinkButton';
import TAGS from '../elements';
import s from './styles.module.css';
import { TEXT_ALIGN } from '../BlockButton';
import { TEXT_STYLES } from '../StyleButton';

export const StylePanel = () => {

   return (
      <div className={s.stylePanelBox}>
         <StyleButton format={TEXT_STYLES.bold} />
         <StyleButton format={TEXT_STYLES.italic} />
         <StyleButton format={TEXT_STYLES.underline} />
         <StyleButton format={TEXT_STYLES.strike} />
         <LinkButton />
         <BlockButton format={TAGS.PRE} />
         <BlockButton format={TAGS.BLOCKQUOTE}/>
         <BlockButton format={TAGS.H1}/>
         <BlockButton format={TAGS.H2}/>
         <BlockButton format={TAGS.H3}/>
         <BlockButton format={TEXT_ALIGN.left}/>
         <BlockButton format={TEXT_ALIGN.center}/>
         <BlockButton format={TEXT_ALIGN.right}/>
         <BlockButton format={TAGS.UL} />
         <BlockButton format={TAGS.OL} />
      </div>
   )
}

export default StylePanel;