
const rearrangeArray = (arr) => {
    arr.sort((a, b) => a - b)

    const result = []
    let left = 0, right = arr.length - 1

    while (left < right) {
        result.push(arr[left++])
        result.push(arr[right--])
    }

    if (left === right) result.push(arr[right])

    return result
}

const arr = [1,2,3]
console.log(rearrangeArray(arr))
