
const repeatedNTimes = (arr) => {
    const set = new Set()
    for (val of arr) {
        if (set.has(val)) return val

        set.add(val)
    }
}

const arr = [2, 1, 2, 5, 3, 2]
console.log(repeatedNTimes(arr))