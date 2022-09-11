
const removeDuplicates = (arr) => {
    let index = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[index]) {
            index++
            arr[index] = arr[i]
        }
    }

    return index + 1
}

const arr = [1,1,2]

console.log(removeDuplicates(arr))