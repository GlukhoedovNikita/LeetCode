

const firstMissingPositive = (arr) => {
    const temp = []

    for (val of arr) {
        if (val >= 0) temp[val] = 1
    }

    console.log(temp)
    for (let i = 0; i < temp.length; i++) {
        const val = temp[i]
        if (val === undefined && i !== 0) return i
    }

    return temp.length
}

const arr = [3,4,-1,1]
console.log(firstMissingPositive(arr))