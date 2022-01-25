import StyleButton from '../StyleButton';
import BlockButton from '../BlockButton';
import LinkButton from '../LinkButton';
import s from './styles.module.css';

export const StylePanel = () => {

   return (
      <div className={s.stylePanelBox}>
         <StyleButton format="bold" />
         <StyleButton format="italic" />
         <StyleButton format="underline" />
         <StyleButton format="strike" />
         <LinkButton />

         
         {/*
            text align
            header type
            drop down
         */}

         
         <BlockButton format="bulleted-list" />
         <BlockButton format="numbered-list" />
         <BlockButton format="code" />
         <BlockButton format="image" />
         <BlockButton format="video-youtube" />
         <BlockButton format="table" />
      </div>
   )
}

export default StylePanel;