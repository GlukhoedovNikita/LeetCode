

const minSteps = (str1, str2) => {
    let result = 0
    const collection = {}

    for (const char of str1) collection[char] = 1 + (collection[char] || 0)

    for (const char of str2) {
        if (collection[char]) collection[char]--
        else result++
    }

    return result
}

const str1 = 'bab'
const str2 = 'aba'

console.log(minSteps(str1, str2))