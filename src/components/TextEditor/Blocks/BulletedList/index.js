export const BulletedList = props => {
   return (
      <ul {...props.attributes}>
         {props.children}
      </ul>
   )
}

export default BulletedList;