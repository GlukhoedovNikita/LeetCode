

const missingNumber = (arr) => {
    const contain = Array(arr.length).fill(0)
    for (val of arr) contain[val]++

    const result = contain.indexOf(0)
    return result === -1 ? arr.length : result
}

const arr = [3, 0, 1]
console.log(missingNumber(arr))