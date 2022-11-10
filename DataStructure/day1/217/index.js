
const containsDuplicate = (arr) => {
    return new Set(arr).size !== arr.length
}

const arr = []
console.log(containsDuplicate(arr))