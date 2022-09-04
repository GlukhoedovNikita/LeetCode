const reverseIntenger = (value) => {
    const reverseAbs = +Math.abs(value).toString().split('').reverse().join('')
    if (reverseAbs >= (2 ** 31) - 1) return 0
    return value >= 0 ? reverseAbs : -reverseAbs
}

const value = 1534236469

console.log(reverseIntenger(value))