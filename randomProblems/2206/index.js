

const divideArray = (arr) => {
    if (arr.length % 2 !== 0) return false

    const set = new Set()


    for (value of arr) {
        if (set.has(value)) set.delete(value)
        else set.add(value)
    }

    return !set.size
}

const arr = [2, 2, 3, 3, 3]
console.log(divideArray(arr))