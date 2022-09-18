
const lengthOfLongestSubstring = (str) => {
    const map = {}
    let start = 0
    let result = 0

    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        const index = map[char]

        if (index >= start) start = index + 1

        result = Math.max(result, i - start + 1)
        map[char] = i
    }

    return result
}

const str = 'bbbbbb'
console.log(lengthOfLongestSubstring(str))