export const changeObjectInArray = (arr, objKeyToCompare, actionPropToCompare, diffObj) => {
  const resArr =  arr.map((obj) => {
    if (obj[objKeyToCompare] === actionPropToCompare) {
      return {...obj, ...diffObj}
    }
    return obj;
  })

  return resArr;
}