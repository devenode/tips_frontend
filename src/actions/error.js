export const ERROR_CHANGE = `ERROR/CHANGE`;

export const setError = arr => {
   return {
      type: ERROR_CHANGE,
      arr
   }
}