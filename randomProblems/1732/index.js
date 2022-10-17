

const largestAltitude = (arr) => {
    return arr.reduce((acc, v) => {
        acc.counter += v
        acc.result = Math.max(acc.result, acc.counter)
        return acc
    }, {
        counter: 0,
        result: 0
    }).result
}

const arr = [-5,1,5,0,-7]
console.log(largestAltitude(arr))