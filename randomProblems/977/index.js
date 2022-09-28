

// const sortedSquares = (arr) => {
//     const result = [], sortedArray = []
//     let negative = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) negative.push(Math.abs(arr[i]))
//         else sortedArray.push(arr[i])
//     }

//     negative = negative.reverse()
//     let left = 0, right = 0

//     while (true) {
//         if (left === negative.length && right === sortedArray.length) break
//         if (sortedArray[right] <= negative[left] || negative[left] === undefined) {
//             result.push(sortedArray[right] ** 2)
//             right++
//         } else {
//             result.push(negative[left] ** 2)
//             left++
//         }

//     }
//     return result
// }

const sortedSquares = (arr) => {
    return arr.map((v) => v ** 2).sort((a, b) => a - b)
}


const arr = [-4,-3, -2,-1,0,3,10]
console.log(sortedSquares(arr))