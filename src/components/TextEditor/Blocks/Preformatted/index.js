export const Preformatted = props => {
   return (
      <pre {...props.attributes}>
         {props.children}
      </pre>
   )
}

export default Preformatted;
