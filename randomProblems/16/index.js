

const threeSumClosest = (arr, target) => {
    const map = {}
    arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) {
        let left = i + 1; right = arr.length - 1;

        while (left < right) {
            const currentSum = arr[i] + arr[left] + arr[right]

            map[i] = currentSum
            if (currentSum === target) return currentSum
            if (currentSum > target) right--
            else left++
        }
    }

    const sortedMapValues = [...new Set(Object.values(map))].sort((a, b) => a - b)
    let left = 0; right = sortedMapValues.length - 1

    while (left < right) {
        const middle = Math.floor((right + left) / 2)
        if (sortedMapValues[middle] === target) return middle
        if (sortedMapValues[middle] > target) right = middle - 1
        else left = middle + 1
    }

    return sortedMapValues[left]
}   

const arr = [1,1,1,5,5,5,5,5,5]
const target = 14

console.log(threeSumClosest(arr, target))