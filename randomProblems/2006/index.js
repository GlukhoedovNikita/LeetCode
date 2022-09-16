
const countKDifference = (arr, k) => {
    let result = 0
    const map = {}
    
    for (val of arr) {
        result += (map[val - k] || 0) + (map[val + k] || 0)
        map[val] = 1 + (map[val] || 0)
    }

    return result
}

const arr = [3,2,1,5,4]
const k = 2

console.log(countKDifference(arr, k))