
const intersect = (arr1, arr2) => {
    const map = new Map()
    const result = []

    for (value of arr1) {
        if (map.has(value)) map.set(value, map.get(value) + 1)
        else map.set(value, 1)
    }

    for (value of arr2) {
        if (map.has(value) && map.get(value) > 0) {
            map.set(value, map.get(value) - 1)
            result.push(value)
        } 
    }

    return result
}

const arr1 = [4,9,5]
const arr2 = [9,4,9,8,4]

console.log(intersect(arr1, arr2))