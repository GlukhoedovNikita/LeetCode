
const partitionString = (string) => {
    let result = 0, currentSubstringSet = new Set()

    for (let i = 0; i < string.length; i++) {
        const char = string[i]
        if (currentSubstringSet.has(char)) {
            currentSubstringSet.clear()
            result++
        }
        currentSubstringSet.add(char)
    }

    return currentSubstringSet.size ? result + 1 : result
}

const string = 'ssssss'
console.log(partitionString(string))