export const Code = props => {
   return (
      <pre {...props.attributes}>
         <code>{props.children}</code>
      </pre>
   )
}

export default Code;
