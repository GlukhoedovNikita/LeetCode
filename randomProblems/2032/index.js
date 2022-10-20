

const twoOutOfThree = (arr1, arr2, arr3) => {
    return Object.entries([...new Set(arr1), ...new Set(arr2), ...new Set(arr3)]
        .reduce((acc, v) => {
            acc[v] = 1 + (acc[v] || 0)
            return acc
        }, {}))
        .filter(([_, val]) => val >= 2)
        .map(([key, _]) => +key)
}

const arr1 = [1,1,3,2]
const arr2 = [2, 3]
const arr3 = [3]

console.log(twoOutOfThree(arr1, arr2, arr3))