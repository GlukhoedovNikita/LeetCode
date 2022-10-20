

const findingUsersActiveMinutes = (arr, k) => {
    const result = Array(k).fill(0)
    const collection = {}

    for (const [id, time] of arr) {
        if (Object.hasOwn(collection, id)) collection[id].add(time)
        else collection[id] = new Set([time])
    }

    for (const timesSet of Object.values(collection)) {
        result[timesSet.size - 1]++
    }

    return result
}

const arr = [[0,5],[1,2],[0,2],[0,5],[1,3]]
const k = 5

console.log(findingUsersActiveMinutes(arr, k))