

const sumOfUnique = (arr) => {
    const map = {}
    for (val of arr) map[val] = 1 + (map[val] || 0)
    return Object.entries(map).reduce((acc, [key, val]) => {
        if (val === 1) return acc += +key

        return acc
    }, 0)
}

const arr = [1,1,1,1,1]
console.log(sumOfUnique(arr))