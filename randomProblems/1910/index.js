

const removeOccurrences = (string, part) => {
    let result = ''
    const partLength = part.length

    for (const char of string) {
        result += char
        if (result.length >= partLength && result.slice(result.length - partLength) === part) {
            result = result.slice(0, result.length - partLength)
        } 
    }

    return result
}

const string = 'daabcbaabcbc'
const part = 'abc'

console.log(removeOccurrences(string, part))