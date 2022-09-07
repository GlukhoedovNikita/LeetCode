
const minCostClimbingStairs = (cost) => {
    const { length } = cost
    let index = 2

    while (index !== length) {
        cost[index] += Math.min(cost[index - 1], cost[index - 2])
        index += 1
    }
    
    return Math.min(cost[length - 1], cost[length - 2])
}

const cost = [1,100,1,1,1,100,1,1,100,1]
console.log(minCostClimbingStairs(cost))