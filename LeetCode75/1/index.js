
const twoSum = (arr, target) => {
    const obj = {}

    for (value of arr) {
        if (obj.hasOwnProperty(target - value)) {
            return [arr.indexOf(value), arr.lastIndexOf(target - value)].sort()
        }
        obj[value] = 1 + (obj[value] || 0)
    }
}

const arr = [3,2,4]
const target = 6

console.log(twoSum(arr, target))