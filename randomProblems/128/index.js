

const longestConsecutive = (arr) => {
    if (!arr.length) return 0

    const set = new Set(arr)
    let result = 1

    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i] - 1)) continue
        if (set.has(arr[i] + 1)) {
            let counter = 1
            while (set.has(arr[i] + counter)) counter++
            result = Math.max(result, counter)
        }
    }

    return result
}

// const longestConsecutive = (arr) => {
//     if (!arr.length) return 0

//     const sortedArray = [...new Set(arr.sort((a, b) => a - b))]
//     let result = 1
//     let counter = 1

//     for (let i = 1; i < sortedArray.length; i++) {
//         if (sortedArray[i] - sortedArray[i - 1] === 1) counter++
//         else counter = 1
//         result = Math.max(result, counter)
//     }

//     return result
// }

const arr = [1,2,0,1]
console.log(longestConsecutive(arr))