

const groupThePeople = (groupSize) => {
    const collection = {}
    const result = []

    for (let i = 0; i < groupSize.length; i++) {
        const size = groupSize[i]
        if (Object.hasOwn(collection, size)) collection[size].push(i)
        else collection[size] = [i]

        if (collection[size].length === size) result.push(collection[size]), delete collection[size]
    }

    return result
}

const groupSize = [3,3,3,3,3,1,3]
console.log(groupThePeople(groupSize))