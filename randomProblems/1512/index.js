
const numIdenticalPairs = (arr) => {
    const helper = (value) => value * (value + 1) / 2
    const map = {}
    let result = 0
    for (value of arr) map[value] = 1 + (map[value] || 0)

    for (value of Object.values(map)) {
        if (value > 1) result += helper(value - 1)
    }

    return result
}

const arr = [1,2,3]
console.log(numIdenticalPairs(arr))