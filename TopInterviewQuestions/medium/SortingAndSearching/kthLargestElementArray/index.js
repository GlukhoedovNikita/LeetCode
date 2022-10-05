

const findKthLargest = (arr, k) => arr.sort((a, b) => b - a)[k - 1]

const arr = [3,2,1,5,6,4]
const k = 2

console.log(findKthLargest(arr, k))