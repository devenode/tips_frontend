import Code from './Blocks/Code';
import Paragraph from './Blocks/Paragraph';


const Block = props => {
   switch (props.element.type) {
      case `code`:
         return <Code {...props} />

      default:
         return <Paragraph {...props} />
   }
}

export default Block;