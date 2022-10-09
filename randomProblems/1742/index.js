

const countBalls = (low, high) => {
    const helper = (number) => [...`${number}`].reduce((acc, v) => acc + +v, 0)

    const map = new Map()
    let result = 0

    for (let i = low; i <= high; i++) {
        const count = helper(i)
        const val = (map.get(count) || 0) + 1
        map.set(count, val)
        result = Math.max(result, val)
    }

    return result
}

const low = 1, high = 10
console.log(countBalls(low, high))