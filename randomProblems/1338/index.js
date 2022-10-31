
const minSetSize = (arr) => {
    const collection = {}
    let result = 0

    for (const val of arr) collection[val] = 1 + (collection[val] || 0)
    Object
        .values(collection)
        .sort((a, b) => b - a)
        .reduce((acc, v) => {
            if (acc < arr.length / 2) result++, acc += v
            
            return acc
        }, 0)

    return result
}

const arr = [3,3,3,3,5,5,5,2,2,7]
console.log(minSetSize(arr))