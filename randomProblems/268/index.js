

const missingNumber = (arr) => {
    const temp = Array(arr.length).fill(0)

    for (value of arr) {
        temp[value] += 1
    }

    const result = temp.indexOf(0)
    return result === -1 ? arr.length : result
}

const arr = [9,6,4,2,3,5,7,0,1]
console.log(missingNumber(arr))