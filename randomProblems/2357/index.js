

const minimumOperations = (arr) => {
    return new Set(arr.filter(Boolean)).size
}

const arr = [1,5,0,3,5]
console.log(minimumOperations(arr))