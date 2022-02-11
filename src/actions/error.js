export const ERROR_CHANGE = `ERROR/CHANGE`;

export const setError = msg => {
   return {
      type: ERROR_CHANGE,
      msg
   }
}