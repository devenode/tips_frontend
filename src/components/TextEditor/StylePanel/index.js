import StyleButton from '../StyleButton';
import BlockButton from '../BlockButton';
import LinkButton from '../LinkButton';
import s from './styles.module.css';
import TAGS from '../elements';

export const StylePanel = () => {

   return (
      <div className={s.stylePanelBox}>
         <StyleButton format="bold" />
         <StyleButton format="italic" />
         <StyleButton format="underline" />
         <StyleButton format="strike" />
         <LinkButton />

         
         {/*
            drop down
            blockquote
         */}
         <BlockButton format={TAGS.BLOCKQUOTE}/>

         <BlockButton format={TAGS.H1}/>
         <BlockButton format={TAGS.H2}/>
         <BlockButton format={TAGS.H3}/>

         <BlockButton align="left"/>
         <BlockButton align="center"/>
         <BlockButton align="right"/>
         
         <BlockButton format={TAGS.UL} />
         <BlockButton format={TAGS.OL} />
         <BlockButton format={TAGS.CODE} />
         <BlockButton format={TAGS.IMG} />
         <BlockButton format={TAGS.IFRAME} />
         <BlockButton format={TAGS.TABLE} />
      </div>
   )
}

export default StylePanel;