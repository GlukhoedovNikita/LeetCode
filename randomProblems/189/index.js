
const rotate = (arr, val) => {
    if (arr.length < val) {
        val = val % arr.length 
    }

    const rightArray = arr.slice(arr.length - val)
    const leftArray = arr.slice(0, arr.length - val)

    for (let i = 0; i < rightArray.length; i++) {
        arr[i] = rightArray[i]
    }

    for (let i = 0; i < leftArray.length; i++) {
        arr[i + rightArray.length] = leftArray[i]
    }

    return arr
}

const arr = [1,2]
const val = 5

console.log(rotate(arr, val))