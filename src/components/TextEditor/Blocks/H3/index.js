export const H3 = props => {
   const { align } = props.element;
   return (
      <h3 {...props.attributes} style={{ textAlign: align }}>
         {props.children}
      </h3>
   )
}

export default H3;