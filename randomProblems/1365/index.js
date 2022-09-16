

const smallerNumbersThanCurrent = (arr) => {
    const temp = [...arr].sort((a, b) => a - b)
    const map = {}
    const result = []

    for (let i = 0; i < temp.length; i++) {
        const value = temp[i]
        const prev = temp[i - 1]
     
        if (i === 0) {
            map[value] = 0
            continue
        }
        if (value > prev) map[value] = i
    }
    for (value of arr) result.push(map[value])

    return result
}

const arr = [5,0,10,0,10,6]
console.log(smallerNumbersThanCurrent(arr))