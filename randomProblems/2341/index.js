

const numberOfPairs = (arr) => {
    const map = {}
    const temp = [0, 0]

    for (value of arr) map[value] = 1 + (map[value] || 0)

    for (value of Object.values(map)) {
        if (value % 2 === 0) temp[0] += value / 2
        else {
            temp[0] += Math.floor(value / 2)
            temp[1]++
        }
    }

    return temp
} 

const arr = [0, 0]
console.log(numberOfPairs(arr))