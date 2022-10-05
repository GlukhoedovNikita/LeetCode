

const topKFrequent = (arr, k) => {
    const map = new Map()

    for (val of arr) map.set(val, 1 + (map.get(val) || 0))

    return [...map.entries()]
        .sort(([key1, val1], [key2, val2]) => val2 - val1)
        .slice(0, k)
        .map(([key, val]) => key)
}

const arr = [1]
const k = 1

console.log(topKFrequent(arr, k))