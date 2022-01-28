export const Paragraph = props => {
   const { align } = props.element;
   return <p {...props.attributes} style={{ textAlign: align }}>
      {props.children}
   </p>
}

export default Paragraph;
