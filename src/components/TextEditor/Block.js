import Code from './Blocks/Code';
import BulletedList from './Blocks/BulletedList';
import NumberedList from './Blocks/NumberedList';
import ListItem from './Blocks/ListItem';
import Link from './Blocks/Link';
import Paragraph from './Blocks/Paragraph';
import H1 from './Blocks/H1';
import H2 from './Blocks/H2';
import H3 from './Blocks/H3';
import TAGS from './elements';


const Block = props => {
   switch (props.element.type) {
      case TAGS.CODE:
         return <Code {...props} />

      case TAGS.UL:
         return <BulletedList {...props} />

      case TAGS.OL:
         return <NumberedList {...props} />

      case TAGS.LI:
         return <ListItem {...props} />

      case TAGS.A:
         return <Link {...props} />

      case TAGS.H1:
         return <H1 {...props} />

      case TAGS.H2:
         return <H2 {...props} />

      case TAGS.H3:
         return <H3 {...props} />

      default:
         return <Paragraph {...props} />
   }
}

export default Block;