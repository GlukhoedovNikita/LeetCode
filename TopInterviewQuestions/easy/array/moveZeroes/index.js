
const moveZeroes = (arr) => {
    const temp = []

    for (value of arr) {
        if (value) temp.push(value)
    }

    for (i in arr) {
        if (temp.length - i > 0) arr[i] = temp[i]
        else arr[i] = 0
    }
    return arr
}

const arr = [0]
console.log(moveZeroes(arr))