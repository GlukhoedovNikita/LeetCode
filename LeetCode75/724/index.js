const pivotIndex = (arr) => {
    let leftSum = 0
    let rigthSum = arr.reduce((acc, prev) => acc += prev, 0)

    for (index in arr) {
        leftSum += arr[index - 1] || 0
        rigthSum -= arr[index]
        if (leftSum === rigthSum) return index
    }
    return -1
}

const arr = [1,7,3,6,5,6]

console.log(pivotIndex(arr))