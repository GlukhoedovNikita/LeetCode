const containsDuplicate = (arr) => new Set(arr).size !== arr.length

const arr = [1,2,3,4]
console.log(containsDuplicate(arr))