

const canPlaceFlowers = (arr, n) => {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i - 1] && !arr[i] && !arr[i + 1]) arr.splice(i, 1, 1), result++
    }

    return result >= n
}

const arr = [1,0,0,0,0,0,1]
const n = 3

console.log(canPlaceFlowers(arr, n))