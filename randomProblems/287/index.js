

const findDuplicate = (arr) => {
    const len = arr.length - new Set(arr).size
    const sum = arr.reduce((acc, v) => acc + v, 0) - [...new Set(arr)].reduce((acc, v) => acc + v, 0)
    return sum / len
}

const arr = [2, 2, 2, 2, 3, 5, 6]
console.log(findDuplicate(arr))