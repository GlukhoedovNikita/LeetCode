

const findMiddleIndex = (arr) => {
    let rightSum = arr.reduce((acc, v) => acc + v, 0)
    let leftSum = 0

    for (let i = 0; i < arr.length; i++) {
        rightSum -= arr[i]
        if (rightSum === leftSum) return i
        leftSum += arr[i]
    }

    return -1
}

const arr = [2,3,-1,8,4]
console.log(findMiddleIndex(arr))
