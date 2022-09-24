

const singleNumber = (arr) => {
    const set = new Set()

    for (value of arr) {
        if (set.has(value)) set.delete(value)
        else set.add(value)
    }

    return [...set.values()]
}

const arr = [1,2,1,3,2,5]
console.log(singleNumber(arr))