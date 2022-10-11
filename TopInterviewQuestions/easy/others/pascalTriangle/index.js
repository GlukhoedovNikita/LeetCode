
const generate = (number) => {
    const result = [[1], [1, 1]]

    if (number === 1) return result.slice(0, 1)
    if (number === 2) return result

    for (let i = 2; i < number; i++) {
        result[i] = Array(i + 1)
            .fill(0)
            .map((_, j) => {
                if (j === 0 || j === result.length) return 1

                return result[i - 1][j - 1] + result[i - 1][j]
            })
    }

    return result
}

const number = 4
console.log(generate(number))