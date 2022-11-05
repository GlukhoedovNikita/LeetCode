

const maxProduct = (words) => {
    words.sort((a, b) => b.length - a.length)

    const helper = (str1, str2) => {
        const set = new Set(str2)

        for (const char of str1) {
            if (set.has(char)) return true
        }

        return false
    }

    let result = 0

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (helper(words[i], words[j])) continue
            else {
                result = Math.max(result, words[i].length * words[j].length)
                break
            }
        }
    }

    return result
}

const words = ["abcw","baz","foo","bar","xtfn","abcdef"]
console.log(maxProduct(words))