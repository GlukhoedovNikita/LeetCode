

const maxSubArray = (arr) => {
    let result = arr[0]
    let currentSum = arr[0]

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(currentSum + arr[i], arr[i])
        result = Math.max(currentSum, result)
    }

    return result
}

const arr = []
console.log(maxSubArray(arr))
