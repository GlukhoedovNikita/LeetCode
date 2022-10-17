

const checkArithmeticSubarrays = (arr, left, right) => {
    const result = []
    for (let i = 0; i < left.length; i++) {
        let value = true
        const sortedArray = arr.slice(left[i], right[i] + 1).sort((a, b) => a - b)
        for (let i = 2; i < sortedArray.length; i++) {
            if (sortedArray[i - 2] - sortedArray[i - 1] !== sortedArray[i - 1] - sortedArray[i]) {
                value = false
                break
            }
        }

        result.push(value)
    }

    return result
}

const arr = [4,6,5,9,3,7]
const left = [0,0,2]
const right = [2,3,5]

console.log(checkArithmeticSubarrays(arr, left, right))