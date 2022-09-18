

const threeSum = (arr) => {
    const result = []
    arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] !== arr[i - 1]) {
            let left = i + 1, right = arr.length - 1
            while (left < right) {
                const sum = arr[i] + arr[left] + arr[right]
                if (sum === 0) {
                    result.push([arr[i], arr[left], arr[right]])
                    while (arr[left] === arr[left + 1]) left++
                    while (arr[right] === arr[right - 1]) right--
                    right--
                    left++
                } else {
                    if (sum > 0) right--
                    else left++   
                }
            }
        }
    }

    return result
}

const arr = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(arr))