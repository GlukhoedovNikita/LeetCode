

const minimumSum = (val) => {
    return [...String(val)].sort((a, b) => a - b).reduce((acc, v, i) => {
        if (i % 2) acc[0] += String(v)
        else acc[1] += String(v)
        return acc
    }, ['', '']).reduce((acc, v) => acc + +v, 0)
}

const val = 2932

console.log(minimumSum(val))