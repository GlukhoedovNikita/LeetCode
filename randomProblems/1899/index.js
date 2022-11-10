

const mergeTriplets = (arr, target) => {
    const result = new Set()


    for (const subArray of arr) {
        const [a, b, c] = subArray
        if (a > target[0] || b > target[1] || c > target[2]) continue
        for (let i = 0; i < target.length; i++) {
            if (target[i] === subArray[i]) result.add(i)
        }
    }

    return result.size === 3
}

const arr = [[3,5, 7]]
const target = [3,5,7]

console.log(mergeTriplets(arr, target))