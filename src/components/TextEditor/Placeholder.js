export const Placeholder = ({ children, attributes }) => {
   return (
      <span {...attributes} style={{...attributes.style, opacity: 1}}>
         {children}
      </span>
   )
}

export default Placeholder;