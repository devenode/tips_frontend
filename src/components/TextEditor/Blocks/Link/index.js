export const Link = ({ attributes, element, children }) => {
   return (
      <a {...attributes} 
         href={element.href}
         target={element.isBlank ? `_blank` : null}
         rel={element.isBlank ? `noopener noreferrer` : null}>

            {children}

      </a>
   )
}

export default Link;