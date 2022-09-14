

const lengthOfLongestSubstring = (str) => {
    let result = 0
    let start = 0
    const map = {}

    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        const indexCharacter = map[char]

        if (indexCharacter >= start) {
            start = indexCharacter + 1
        }

        map[char] = i
        result = Math.max(result, i - start + 1)
    }

    return result
}

const str = 'jbpnbwwd'
console.log(lengthOfLongestSubstring(str))