

const findSubstring = (str, words) => {
    const length = words[0].length
    const wordsMap = {}, result = []
    let start = 0, currentMap = {}

    for (word of words) wordsMap[word] = 1

    for (let i = 0; i < str.length - length; i++) {
        const word = str.slice(i, i + length)
        if (wordsMap[word] && !currentMap[word]) {
            currentMap[word] = 1
            start++
            i += length - 1

            if (start === words.length) {
                result.push(i - start * length + 1)
                i -= (start - 1) ** length
                currentMap = {}
                start = 0
            }
        } else {
            if (start) i -= (start - 1) ** length
            currentMap = {}
            start = 0
        }
    }

    return result
}

const str = 'barfoothefoobarman'
const words = ["foo","bar"]

console.log(findSubstring(str, words))