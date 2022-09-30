

const rearrangeArray = (arr) => {
    const result = Array(arr.length).fill(0)

    let left = 0, right = 1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result[left] = arr[i]
            left += 2
        } else {
            result[right] = arr[i]
            right += 2
        }
    }

    return result
}

const arr = [3,1,-2,-5,2,-4]
console.log(rearrangeArray(arr))