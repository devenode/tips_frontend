export const Paragraph = props => {
   const { textAlign } = props.element;
   return <p {...props.attributes} style={{ textAlign }}>
      {props.children}
   </p>
}

export default Paragraph;
