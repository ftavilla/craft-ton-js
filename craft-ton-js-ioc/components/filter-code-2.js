export const filterCodePt2 = `function filter(array, filterFn) {
  let newArray = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (filterFn(element)) {
      newArray[newArray.length] = element
    }
  }
  return newArray
}

filter([0, 1, undefined, 2, null, 3, 'four', ''], el => el !== null && el !== undefined)
// [0, 1, 2, 3, 'four', '']

filter([0, 1, undefined, 2, null, 3, 'four', ''], el => el !== undefined)
// [0, 1, 2, null, 3, 'four', '']

filter([0, 1, undefined, 2, null, 3, 'four', ''], el => el !== undefined && el !== null && el !== 0)
// [1, 2, 3, 'four', '']`
    .trim()
