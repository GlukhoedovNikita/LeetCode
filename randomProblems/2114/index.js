

const mostWordsFound = (sentences) => {
    return sentences.reduce((acc, string) => {
        return Math.max(acc, string.split(' ').length)
    }, 0)
}

const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(mostWordsFound(sentences))