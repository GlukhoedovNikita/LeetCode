const singleNumber = (arr) => {
    const map = new Map()
    for (value of arr) {
        if (map.has(value)) map.set(value, 2)
        else map.set(value, 1)
    }

    return [...map.entries()].filter(([key, v]) => v === 1)[0][0]
}

const arr = [1]
console.log(singleNumber(arr))