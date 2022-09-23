

const findDuplicates = (arr) => {
    const set = new Set()
    const result = []

    for (value of arr) {
        if (set.has(value)) result.push(value)
        else set.add(value)
    }

    return result
}

const arr = [4,3,2,7,8,2,3,1]
console.log(findDuplicates(arr))