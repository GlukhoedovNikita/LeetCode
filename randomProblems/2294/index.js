

const partitionArray = (arr, k) => {
    arr.sort((a, b) => a - b)

    let result = 1
    let min = arr[0], diff

    for (let i = 1; i <= arr.length; i++) {
        diff = arr[i] - min
        
        if (diff > k) {
            min = arr[i]
            result++
        }
    }

    return result
}

const arr = [0]
const k = 0

console.log(partitionArray(arr, k))
