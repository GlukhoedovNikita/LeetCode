const runningSum = (arr) => {
    for (index in arr) {
        if (index > 0) arr[index] += arr[index - 1]
    }
    return arr
}

const arr = [1,2,3,4]

console.log(runningSum(arr))