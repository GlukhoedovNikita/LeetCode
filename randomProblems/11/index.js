

const maxArea = (arr) => {
    let start = 0
    let end = arr.length - 1
    let max = 0

    while (start <= end) {
        const temp = Math.min(arr[start], arr[end]) * (end - start) 

        if (temp >= max) max = temp

        if (arr[start] >= arr[end]) end -= 1
        else start += 1
    }

    return max
}

const arr = [1,2,3,4,5,25, 24,7]
console.log(maxArea(arr))