
const numSteps = (string) => {
    let result = 0
    let val = BigInt('0b' + string)

    while (val !== 1n) {
        val = (val % 2n === 1n) ? val + 1n : val / 2n
        result++
    }


    return result
}

const string = '1101'
console.log(numSteps(string))