
const wateringPlants = (plants, capacity) => {
    let result = 0
    let capacityOnEachIteration = capacity

    for (let i = 0; i < plants.length; i++) {
        result++
        if (capacityOnEachIteration - plants[i] < 0) {
            result += i * 2
            capacityOnEachIteration = capacity
        } 
        capacityOnEachIteration -= plants[i]
    }

    return result
}

const plants = [3,2,4,2,1]
const capacity = 6

console.log(wateringPlants(plants, capacity))