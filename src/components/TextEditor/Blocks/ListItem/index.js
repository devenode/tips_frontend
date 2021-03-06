export const ListItem = props => {
   return (
      <li {...props.attributes}>
         {props.children}
      </li>
   )
}

export default ListItem;