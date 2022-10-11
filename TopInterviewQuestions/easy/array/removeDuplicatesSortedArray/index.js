
const removeDuplicates = (arr) => {
    let i = 0
    while (i < arr.length - 1) {
        if (arr[i] === arr[i + 1]) arr.splice(i, 1), i--
        i++
    }

    return arr
}

const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3]
console.log(removeDuplicates(arr))