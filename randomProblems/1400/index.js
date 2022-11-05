

const canConstruct = (string, val) => {
    if (string.length < val) return false

    const collection = {}

    for (const char of string) collection[char] = 1 + (collection[char] || 0)
    if (Object.values(collection).filter((v) => v % 2).length > val) return false


    return true
}

const string = ''
const val = 2

console.log(canConstruct(string, val))