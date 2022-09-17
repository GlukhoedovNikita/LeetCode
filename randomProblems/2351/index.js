

const repeatedCharacter = (str) => {
    const set = new Set()

    for (char of str) {
        if (set.has(char)) return char
        
        set.add(char)
    }

    return ''
}

const str = 'abcdd'
console.log(repeatedCharacter(str))