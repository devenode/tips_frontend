import Code from './Blocks/Code';
import BulletedList from './Blocks/BulletedList';
import NumberedList from './Blocks/NumberedList';
import ListItem from './Blocks/ListItem';
import Link from './Blocks/Link';
import Paragraph from './Blocks/Paragraph';


const Block = props => {
   switch (props.element.type) {
      case `code`:
         return <Code {...props} />

      case `bulleted-list`:
         return <BulletedList {...props} />

      case `numbered-list`:
         return <NumberedList {...props} />

      case `list-item`:
         return <ListItem {...props} />

      case `link`:
         return <Link {...props} />

      default:
         return <Paragraph {...props} />
   }
}

export default Block;