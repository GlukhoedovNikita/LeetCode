
const restoreArray = (arr) => {
    const collection = Object.fromEntries(arr.map(v => v.reverse()))
    const collection1 = Object.fromEntries(arr.map(v => v.reverse()))
    const set = new Set()
    const result = []

    for (const [val1, val2] of arr) {
        if (set.has(val1)) set.delete(val1)
        else set.add(val1)

        if (set.has(val2)) set.delete(val2)
        else set.add(val2)
    }

    let firstLetter = [...set.values()][0]

    while (Object.hasOwn(collection, firstLetter) || Object.hasOwn(collection1, firstLetter)) {
        result.push(firstLetter)
        firstLetter = collection[firstLetter]
        if (!firstLetter) firstLetter = collection1[firstLetter]
    }

    return result.length - 1 !== arr.length ? [...result, [...set.values()].at(-1)] : result
}

const arr = [[2,1],[3,4],[3,2]]
console.log(restoreArray(arr))