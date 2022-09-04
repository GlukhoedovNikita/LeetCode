
const plusOne = (arr) => {
    let plus = false
    const { length } = arr
    for (index in arr) {
        if (arr[length - 1 - index] + 1 < 10) {
            plus = true
            arr[length - 1 - index] += 1
        } else {
            arr[length - 1 - index] = 0
        }
        if (plus) return arr
    }

    return [1, ...arr]
}

const arr = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// const arr = [9]
console.log(plusOne(arr))