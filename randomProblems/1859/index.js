

const sortSentence = (string) => {
    return string.split(' ').reduce((acc, word) => {
        acc[word.at(-1) - 1] = word.slice(0, word.length - 1)
        return acc
    }, []).join(' ')
}

const string = 'is2 sentence4 This1 a3'
console.log(sortSentence(string))
