

const maxCoins = (arr) => {
    arr.sort((a, b) => a - b)
    let left = 0, right = arr.length - 1
    let result = 0
    while (left < right) {
        right--
        result += arr[right]
        left++, right--
    }

    return result 
}

const arr = [2,4,1,2,7,8]
console.log(maxCoins(arr))