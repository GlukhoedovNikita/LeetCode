

const minNumberOperations = (arr) => {
    let prevValue = 0, result = 0

    for (val of arr) {
        result += Math.max(0, val - prevValue)
        prevValue = val
    }

    return result
}

const arr = [1,2,3,2,1]
console.log(minNumberOperations(arr))