

const areOccurrencesEqual = (str) => {
    const map = {}

    for (char of str) map[char] = 1 + (map[char] || 0)

    const value = map[str[0]]
    return !Object.values(map).filter((v) => v !== value).length
}

const str = 'aaabbb'
console.log(areOccurrencesEqual(str))