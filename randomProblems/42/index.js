

const trap = (arr) => {
    let result = 0, currentWaterSum = 0
    let left = 0, right = 1
    while (right !== arr.length) {
        currentWaterSum += Math.max(arr[left] - arr[right], 0)

        if (arr[left] <= arr[right]) {
            result += currentWaterSum
            currentWaterSum = 0
            left = right
            right = left
        } else if (right + 1 === arr.length - 1 && arr[left] > arr[right + 1]) {
            left += 1
            right = left
            currentWaterSum = 0
        }

        right++
    }


    return result
}

const arr = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(arr))