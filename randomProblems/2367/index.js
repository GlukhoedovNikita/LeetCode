
const arithmeticTriplets = (arr, diff) => {
    const map = {}
    let result = 0

    for (value of arr) {
        map[value] = 1
    }

    for (let i = 0; i < arr.length; i++) {
        const val = arr[i]
        if (Object.hasOwn(map, val) && Object.hasOwn(map, val + diff) && Object.hasOwn(map, val - diff)) {
            result += 1
        }
    }

    return result
}

const arr = [4,5,6,7,8,9]
const diff = 2

console.log(arithmeticTriplets(arr, diff))