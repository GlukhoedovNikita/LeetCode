
const peakIndexInMountainArray = (arr) => {
    let result = 0

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) return i
    }

    return -1
}

const arr = [0, 2, 1, 0]
console.log(peakIndexInMountainArray(arr))
