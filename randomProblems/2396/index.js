

const isStrictlyPalindromic = (number) => {
    const isPalindrom = (str) => str.split('').reverse().join('') === str

    let counter = 2
    while (counter <= number - 2) {
        if (isPalindrom(number.toString(counter))) counter++
        else return false
    }

    return true
}

const number = 4
console.log(isStrictlyPalindromic(number))