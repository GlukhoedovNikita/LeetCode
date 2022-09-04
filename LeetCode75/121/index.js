
const maxProfit = (arr) => {
    let profit = 0
    let min = Math.max(...arr) + 1
    for (value of arr) {
        if (value < min) min = value
        else if (value - min > profit) profit = value - min
    }
    return profit
}

const arr = [7,6,4,1,2]

console.log(maxProfit(arr))