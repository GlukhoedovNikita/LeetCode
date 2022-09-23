

const searchRange = (arr, target) => {
    let left = 0; right = arr.length - 1
    let result = -1

    while (left <= right) {
        const middle = Math.floor((left + right) / 2)

        if (arr[middle] === target) {
            result = middle
            break
        }

        if (arr[middle] > target) right = middle - 1
        else left = middle + 1
    }

    if (result === - 1) return [-1, -1]
    
    let min = result, max = result
    while (true) {
        if (arr[min - 1] === target) min--
        if (arr[max + 1] === target) max++

        if (arr[min - 1] !== target && arr[max + 1] !== target) break
    }

    return [min, max]
}

const arr = [1, 2, 3, 6, 7, 7, 8]
const target = 3

console.log(searchRange(arr, target))