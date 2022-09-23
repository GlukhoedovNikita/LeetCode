
const jump = (arr) => {
    let result = 0, oldMax = 0, max = 0

    for (let i = 0; i < arr.length - 1; i++) {
        max = Math.max(max, arr[i] + i)

        if (i === oldMax) {
            result++
            oldMax = max
        }
    }

    return result
}

const arr = [1,2,1,1,1]
console.log(jump(arr))