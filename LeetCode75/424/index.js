
const characterReplacement = (str, amount) => {
    const chars = {}

    let left = 0
    let max = 0
    let result = 0
    for (let i = 0; i < str.length; i ++) {
        const char = str[i]
        chars[char] = 1 + (chars[char] || 0) 

        max = Math.max(max, chars[char])

        while ((i - left + 1) - max > amount) {
            chars[str[left]] -= 1
            left++
        }

        result = Math.max(result, i - left + 1)
    }

    return result
}

const str = 'AABABBA'
const amount = 1

console.log(characterReplacement(str, amount))