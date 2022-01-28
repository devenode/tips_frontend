export const H2 = props => {
   const { align } = props.element;
   return (
      <h2 {...props.attributes} style={{ textAlign: align }}>
         {props.children}
      </h2>
   )
}

export default H2;