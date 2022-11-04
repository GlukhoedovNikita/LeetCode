
const rearrangeBarcodes = (arr) => {
    const sortedEntries = Object.entries(
        arr.reduce((acc, v) => {
            acc[v] = 1 + (acc[v] || 0)
            return acc
        }, {})
    )
        .map(([key, val]) => [+key, val])
        .sort((a, b) => b[1] - a[1])

    const result = []
    let index = 0

    while (result.length !== arr.length) {
        if (sortedEntries[index][1] > 0) result.push(+sortedEntries[index][0]), sortedEntries[index][1]--
        index++

        if (sortedEntries[index] === undefined) index = 0
        if (
            sortedEntries[0][1] - sortedEntries[index][1] >= 1 &&
            result[result.length - 1] !== sortedEntries[0][0]
        ) index = 0
    }

    return result
}

const arr = [1, 1, 1, 1, 2, 2, 3, 3]
console.log(rearrangeBarcodes(arr))