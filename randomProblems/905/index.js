

// const sortArrayByParity = (arr) => {
//     let left = 0, right = 0

//     while (right !== arr.length) {
//         if (arr[right] % 2 === 0) {
//             const temp = arr[left]
//             arr[left] = arr[right]
//             arr[right] = temp
//             left++
//         }

//         right++
//     }

//     return arr
// }

const sortArrayByParity = (arr) => {
    const arr1 = [], arr2 = []

    for (value of arr) {
        if (value % 2) arr2.push(value)
        else arr1.push(value)
    }


    return [...arr1, ...arr2]
}

const arr = [3,1,2,4, 6]
console.log(sortArrayByParity(arr))