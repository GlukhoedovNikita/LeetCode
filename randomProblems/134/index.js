

const canCompleteCircuit = (gas, cost) => {
    let tank = 0, total = 0, result = 0

    for (let i = 0; i < cost.length; i++) {
        tank += gas[i] - cost[i]

        if (tank < 0) {
            total += tank
            tank = 0
            result = i + 1
        }
    }

    return tank + total >= 0 ? result : -1
}

const gas = [1,2,3,4,5]
const cost = [3,4,5,1,2]

console.log(canCompleteCircuit(gas, cost))