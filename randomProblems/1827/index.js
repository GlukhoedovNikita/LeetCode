

const minOperations = (arr) => {
    let result = 0

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] >= arr[i]) result += arr[i - 1] - arr[i] + 1, arr[i] = arr[i - 1] + 1
    }

    return result
}

const arr = [1,5,2,4,1]
console.log(minOperations(arr))