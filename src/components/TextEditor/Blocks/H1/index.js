export const H1 = props => {
   const { align } = props.element;
   return (
      <h1 {...props.attributes} style={{ textAlign: align }}>
         {props.children}
      </h1>
   )
}

export default H1;