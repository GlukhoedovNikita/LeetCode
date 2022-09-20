

// const search = (arr, target) => {
//     let sortedArray
//     let indexReverse

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i - 1] > arr[i]) {
//             indexReverse = i
//             break
//         }
//     }

//     if (indexReverse) {
//         sortedArray = [...arr.slice(indexReverse), ...arr.slice(0, indexReverse)]
//     } else sortedArray = arr

//     let left = 0, right = sortedArray.length - 1
//     while (left <= right) {
//         const middle = Math.floor((left + right) / 2)
//         if (sortedArray[middle] === target) return indexReverse ? middle + indexReverse : middle
//         if (sortedArray[middle] > target) right = middle - 1
//         else left = middle + 1
//     }

//     return -1
// }

const search = (arr, target) => {
    let indexReverse

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            indexReverse = i
            break
        }
    }

    const binarySearch = (array, value) => {
        let left = 0, right = array.length
        while (left <= right) {
            const middle = Math.floor((left + right) / 2)
            if (array[middle] === value) return middle
            if (array[middle] > value) right = middle - 1
            else left = middle + 1
        }

        return -1
    }

    if (indexReverse) {
        const result1 = binarySearch(arr.slice(0, indexReverse), target)
        const result2 = binarySearch(arr.slice(indexReverse), target)

        if (result1 !== -1) return result1
        if (result2 !== -1) return result2 + indexReverse

        return -1
    } else {
        return binarySearch(arr, target)
    }
}

const arr =[3, 1]
const target = 3

console.log(search(arr, target))