

const majorityElement = (arr) => {
    const map = {}
    const result = []

    for (value of arr) map[value] = 1 + (map[value] || 0)

    const condition = arr.length / 3

    for ([key, value] of Object.entries(map)) {
        if (value > condition) result.push(+key)
    }


    return result
}

const arr = [1, 2]
console.log(majorityElement(arr))