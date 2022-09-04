
const isPalindrome = (str) => {
    const onlyLowerLetters = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    const { length } = onlyLowerLetters
    for (index in onlyLowerLetters) {
        if (onlyLowerLetters[index] !== onlyLowerLetters[length - +index - 1]) return false
    }
    return true
}

const str = "0P"
console.log(isPalindrome(str))