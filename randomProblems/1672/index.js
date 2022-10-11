
const sumArray = (arr) => arr.reduce((acc, v) => acc + v, 0)
const maximumWealth = (arr) => arr.reduce((acc, v) => Math.max(acc, sumArray(v)), -Infinity)

const arr = [[1, 5], [7, 3], [3, 5]]
console.log(maximumWealth(arr))
