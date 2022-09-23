

const findAndReplacePattern = (words, pattern) => {
    const result = []

    for (word of words) {
        if (word.length === 1 && pattern.length === 1) {
            result.push(word)
            continue
        }

        const patternMap = new Map()
        const wordMap = new Map()
        wordMap.set(word[0], 0)
        patternMap.set(pattern[0], 0)

        let index = 1
        let condition = true

        for (let i = 1; i < word.length; i++) {
            if (word[i] === word[i - 1] && pattern[index] !== pattern[index - 1]) {
                condition = false
                break
            }

            if (word[i] !== word[i - 1] && pattern[index] === pattern[index - 1]) {
                condition = false
                break
            }

            if (wordMap.get(word[i]) !== patternMap.get(pattern[index])) {
                condition = false
                break
            }

            wordMap.set(word[i], i)
            patternMap.set(pattern[index], index)
            index++
        }

        if (condition) result.push(word)
    }


    return result
}

const words = ["abc","deq","mee","aqq","dkd","ccc"]
const pattern = "abb"

console.log(findAndReplacePattern(words, pattern))