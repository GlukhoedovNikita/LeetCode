

const topKFrequent = (arr, k) => {
    const map = {}

    for (value of arr) map[value] = 1 + (map[value] || 0)

    const entries = Object.entries(map).sort(([key, value], [key1, value1]) => value1 - value)

    return entries.slice(0, k).map(([key, _]) => +key)
}

const arr = [1,1,1,2,2,3]
const k = 2

console.log(topKFrequent(arr, k))