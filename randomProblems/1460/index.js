

const canBeEqual = (arr1, arr2) => {
    const map = new Map()

    for (val of arr1) map.set(val, 1 + (map.get(val) || 0))
    
    for (val of arr2) {
        if (map.has(val) && map.get(val)) map.set(val, map.get(val) - 1)
        else return false
    }

    return ![...map.entries()].filter(([_, val]) => val).length
}

const arr1 = [1,2,3,4]
const arr2 = [2, 1, 3, 4]

console.log(canBeEqual(arr1, arr2))