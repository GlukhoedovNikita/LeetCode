

const checkIfExist = (arr) => {
    const map = {}
    for (val of arr) map[val] = 1 + (map[val] || 0)
    
    for (val of arr) {
        if (val && map[val / 2]) return true
        if (!val && map[val] > 1) return true
    }

    return false
}

const arr = [0, 0]
console.log(checkIfExist(arr))