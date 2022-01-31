import StyleButton from '../StyleButton';
import BlockButton from '../BlockButton';
import LinkButton from '../LinkButton';
import TAGS from '../elements';
import s from './styles.module.css';


export const StylePanel = () => {

   return (
      <div className={s.stylePanelBox}>
         <StyleButton format="bold" />
         <StyleButton format="italic" />
         <StyleButton format="underline" />
         <StyleButton format="strike" />
         <LinkButton />

         <BlockButton format={TAGS.PRE} />
         <BlockButton format={TAGS.BLOCKQUOTE}/>
         <BlockButton format={TAGS.H1}/>
         <BlockButton format={TAGS.H2}/>
         <BlockButton format={TAGS.H3}/>
         <BlockButton align="left"/>
         <BlockButton align="center"/>
         <BlockButton align="right"/>
         <BlockButton format={TAGS.UL} />
         <BlockButton format={TAGS.OL} />
      </div>
   )
}

export default StylePanel;