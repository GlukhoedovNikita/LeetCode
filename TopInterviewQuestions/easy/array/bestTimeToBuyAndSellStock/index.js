const maxProfit = (arr) => arr.reduce((acc, prev, i, arr) => {
    if ((i + 1) < arr.length && arr[i + 1] > prev) {
        return acc += arr[i + 1] - prev
    } else return acc
}, 0)


const arr = [7,1,5,3,6,4]

console.log(maxProfit(arr))