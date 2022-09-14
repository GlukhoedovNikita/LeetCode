
const searchInsert = (arr, target) => {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        const middle = Math.floor((right + left) / 2)
        if (target === arr[middle]) return middle
        if (arr[middle] < target) left = middle + 1
        if (arr[middle] > target) right = middle - 1
    }

    return left
}

const arr = [1, 2, 3, 5]
const target = 0

console.log(searchInsert(arr, target))