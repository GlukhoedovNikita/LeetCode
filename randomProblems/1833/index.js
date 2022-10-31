
const maxIceCream = (costs, coins) => {
    let result = 0
    let money = coins
    costs.sort((a, b) => a - b)

    for (const price of costs) {
        money -= price
        if (money >= 0) result++
        else break
    }

    return result
}

const costs = [1,3,2,4,1]
const coins = 7

console.log(maxIceCream(costs, coins))