export const Blockquote = props => {
   return (
      <blockquote {...props.attributes}>
         {props.children}
      </blockquote>
   )
}

export default Blockquote;