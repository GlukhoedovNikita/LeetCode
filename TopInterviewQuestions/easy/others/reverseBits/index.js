
const reverseBits = (number) => {
    let binaryString = number.toString(2)
    if (binaryString.length !== 32) {
        binaryString = Array(32 - binaryString.length).fill(0).join('') + binaryString
    }

    return Number.parseInt([...binaryString].reverse().join(''), 2)
}

const number = 43261596
console.log(reverseBits(number))