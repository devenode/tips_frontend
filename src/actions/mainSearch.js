export const MAINSEARCH_CHANGE_INPUT = `MAINSEARCH/CHANGE_INPUT`;

export const changeSearchInput = text => {
   return {
      type: MAINSEARCH_CHANGE_INPUT,
      text
   }
}