

// const isPalindrome = (value) => {
//     if (value < 0) return false
//     const str = value.toString()
//     for (let i = 0; i < Math.floor(str.length / 2); i++) {
//         if (str[i] !== str[str.length - 1 - i]) return false
//     }

//     return true
// }

const isPalindrome = (value) => {
    if (value < 0) return false
    return value === Number(Array.from(value.toString()).reverse().join(''))
}

const value = 12321
console.log(isPalindrome(value))