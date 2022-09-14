

const removeElement = (arr, value) => {
    let index = 0
    for (val of arr) {
        if (val !== value) {
            arr[index] = val
            index++
        }
    }

    return index
}

const arr = [3,2,2,3]
const value = 3

console.log(removeElement(arr, value))