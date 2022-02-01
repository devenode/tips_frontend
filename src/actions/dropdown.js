export const DROPDOWN_SET_HEADING = `DROPDOWN/SET_HEADING`;
export const DROPDOWN_SET_ALIGN = `DROPDOWN/SET_ALIGN`;
export const DROPDOWN_SET_LIST = `DROPDOWN/SET_LIST`;


export const setHeading = heading => {
   return {
      type: DROPDOWN_SET_HEADING,
      heading
   }
}

export const setAlign = align => {
   return {
      type: DROPDOWN_SET_ALIGN,
      align
   }
}

export const setList = list => {
   return {
      type: DROPDOWN_SET_LIST,
      list
   }
}