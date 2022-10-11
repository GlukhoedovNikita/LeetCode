

const finalValueAfterOperations = (arr) => {
    return arr.reduce((acc, v) => {
        return acc + (v.includes('+') ? 1 : -1)
    }, 0)
}

const arr = ["--X","X++","X++"]
console.log(finalValueAfterOperations(arr))