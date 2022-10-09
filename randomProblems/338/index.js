

const countBits = (number) => {
    const helper = (binaryString) => [...binaryString].reduce((acc, v) => +v ? acc + +v : acc ,0)

    return Array(number + 1).fill(0).map((_, i) => {
        return helper(i.toString(2))
    })
}

const number = 5
console.log(countBits(number))