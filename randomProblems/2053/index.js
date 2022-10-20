

const kthDistinct = (arr, val) => {
    const map = {}
    let result = ''

    for (value of arr) map[value] = 1 + (map[value] || 0)
    
    for ([key, v] of Object.entries(map)) {
        if (v === 1) val--
        if (!val) return key
    }


    return result
}

const arr = ["d","b","c","b","c","a"]
const val = 1

console.log(kthDistinct(arr, val))