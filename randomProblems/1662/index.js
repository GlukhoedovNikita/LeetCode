
const arrayStringsAreEqual = (arr1, arr2) => arr1.join('') === arr2.join('')

const arr1 = ["ab", "c"]
const arr2 = ["a", "bc"]

console.log(arrayStringsAreEqual(arr1, arr2))
