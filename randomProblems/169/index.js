

const majorityElement = (arr) => {
    const obj = {}
    for (value of arr) {
        obj[value] = 1 + (obj[value] || 0) 
    }

    const max = Math.max(...Object.values(obj))
    return Object.keys(obj).find((key) => obj[key] === max)
}

const arr = [2,2,1,1,1,2,2]
console.log(majorityElement(arr))