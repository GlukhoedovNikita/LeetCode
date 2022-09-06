

const longestCommonPrefix = (arr) => {
    let result = arr[0]
    for (word of arr) {
        for (index in word) {
            if (word[index] !== result[index]) {
                result = result.split('').slice(0, index).join('')
            }
        }

        if (result.length > word.length && result.slice(0, word.length) === word) {
            result = word
        }
    }

    return result
}

const arr = ["flower", "flow", "flight"]

console.log(longestCommonPrefix(arr))