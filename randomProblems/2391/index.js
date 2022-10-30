

const garbageCollection = (garbage, travel) => {
    const sumSubArray = (start, end) => {
        return travel.slice(start, end).reduce((acc, v) => acc + v, 0)
    }

    let result = garbage[0].length
    const collection = {
        'M': 0,
        'P': 0,
        'G': 0,
    }

    for (let i = 1; i < garbage.length; i++) {
        for (char of garbage[i]) {
            result += 1 + sumSubArray(collection[char], i)
            collection[char] = i
        }
    }

    return result
}

const garbage = ["G","P","GP","GG"]
const travel = [2,4,3]

console.log(garbageCollection(garbage, travel))