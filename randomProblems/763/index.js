
const partitionLabels = (str) => {
    const map = {}
    const result = []
    let substr = ''

    for (char of str) map[char] = 1 + (map[char] || 0)


    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        substr += char
        map[char]--

        for (let j = 0; j < substr.length; j++) {
            if (map[substr[j]]) break
            if (j === substr.length - 1) {
                result.push(substr.length)
                substr = ''
            }
        }
    }

    return result
}

const str = 'eccbbbbdec'
console.log(partitionLabels(str))