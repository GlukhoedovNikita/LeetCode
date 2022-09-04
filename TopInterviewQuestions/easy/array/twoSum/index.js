
const twoSum = (arr, target) => {
    const map = new Map()
    for (index in arr) {
        if (map.has(target - arr[index])) return [index, map.get(target - arr[index])]
        map.set(arr[index], index)
    }
}

const arr = [3, 3]
const target = 6

console.log(twoSum(arr, target))