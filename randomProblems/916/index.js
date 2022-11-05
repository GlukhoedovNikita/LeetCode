
const wordSubsets = (words1, words2) => {
    const result = []
    const arrayCollections = words2.map((word) => {
        const collection = {}
        for (const char of word) {
            collection[char] = 1 + (collection[char] || 0)
        }

        return collection
    })


    for (const word of words1) {
        let flag = true
        const collectionCharsWord = [...word].reduce((acc, char) => {
            acc[char] = 1 + (acc[char] || 0)
            return acc
        }, {})

        
        for (const collection of arrayCollections) {
            if (!flag) break
            for (const [key, val] of Object.entries(collection)) {
                if (!collectionCharsWord[key] || collectionCharsWord[key] < val) {
                    flag = false
                    break
                }
            }
        }

        if (flag) result.push(word)
    }

    return result
}

const words1 = ["amazon", "apple", "facebook", "google", "leetcode"]
const words2 = ["lo", "eo"]

console.log(wordSubsets(words1, words2))
