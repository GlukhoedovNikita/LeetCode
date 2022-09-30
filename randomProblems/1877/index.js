

const minPairSum = (arr) => {
    let max = 0, left = 0, right = arr.length - 1
    arr.sort((a, b) => a - b)

    while (left < right) {
        max = Math.max(max, arr[left] + arr[right])
        left++
        right--
    }

    return max
}

const arr = [3,5,2,3]
console.log(minPairSum(arr))