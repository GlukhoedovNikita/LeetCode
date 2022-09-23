

const mergeAlternately = (word1, word2) => {
    let result = ''
    let index = 0

    for (let i = 0; i < word1.length; i++) {
        result += word1[i]
        result += word2[index]

        index++

        if (index === word2.length) return result += word1.slice(i + 1)
    }

    result += word2.slice(index)

    return result
}

const word1 = 'abcd'
const word2 = 'pq'

console.log(mergeAlternately(word1, word2))