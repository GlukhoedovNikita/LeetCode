

const searchMatrix = (matrix, target) => {
    const arr = [].concat(...matrix)
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2)
        if (arr[middle] === target) return true
        if (arr[middle] > target) right = middle - 1
        else left = middle + 1
    }

    return false
}

const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
const target = 3

console.log(searchMatrix(matrix, target))