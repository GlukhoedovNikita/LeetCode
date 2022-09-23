

const findMin = (arr) => {
    let left = 0, right = arr.length - 1, min = Infinity

    while (left <= right) {
        const middle = Math.floor((left + right) / 2)
        min = Math.min(min, arr[middle])

        if (arr[left] <= arr[middle]) {
            min = Math.min(min, arr[left])
            left = middle + 1
        } else {
            min = Math.min(min, arr[right])
            right = middle - 1
        }
    }

    return min
}

const arr = [4,5,6,7,1,2]
console.log(findMin(arr))