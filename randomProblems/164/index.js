

// const maximumGap = (arr) => {
//     if (arr.length < 2) return 0

//     const max = Math.max(...arr)
//     const sortedArray = Array(max + 1).fill(0)

//     for (value of arr) sortedArray[value] += 1
    
//     let result = 0, start = 0
//     for (let i = 0; i < sortedArray.length; i++) {
//         if (sortedArray[i] && !start) {
//             start = i
//             continue
//         }

//         if (sortedArray[i] && start !== 0) {
//             result = Math.max(result, i - start)
//             start = 0
//         }
//     }

//     return result
// }

const maximumGap = (arr) => {
    arr.sort((a, b) => a - b)
    let result = 0
    for (let i = 1; i < arr.length; i++) {
        result = Math.max(result, arr[i] - arr[i - 1])
    }

    return result
}

const arr = [1,10000000]
console.log(maximumGap(arr))