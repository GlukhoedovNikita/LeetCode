
const hammingDistance = (number1, number2) => {
    const binaryNumber1 = [...number1.toString(2)].reverse().join('')
    const binaryNumber2 = [...number2.toString(2)].reverse().join('')
    let result = 0

    for (let i = 0; i < Math.max(binaryNumber1.length, binaryNumber2.length); i++) {
        if (!binaryNumber1[i] || !binaryNumber2[i]) {
            if (!binaryNumber1[i] && binaryNumber2[i] === '1') result++
            if (!binaryNumber2[i] && binaryNumber1[i] === '1') result++

            continue
        }
        if (binaryNumber1[i] !== binaryNumber2[i]) result++
    }

    return result
}

const number1 = 14, number2 = 4
console.log(hammingDistance(number1, number2)) 