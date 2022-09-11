
const generate = (value) => {
    let count = 1
    const result = [[1]]

    if (value === 1) return result

    while (count !== value) {
        const arr = []
        for (let i = 1; i < result[count - 1].length; i++) {
            arr.push(result[count - 1][i] + result[count - 1][i - 1])
        }
        result.push([1, ...arr, 1])

        count += 1
    }

    return result
}

const value = 1
console.log(generate(value))