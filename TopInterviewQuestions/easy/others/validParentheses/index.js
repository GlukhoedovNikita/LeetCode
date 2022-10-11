

const isValid = (str) => {
    const stack = []
    const collection = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    for (char of str) {
        if (Object.hasOwn(collection, char)) stack.push(char)
        else if (
            stack.pop() !== Object.entries(collection).filter(([_, val]) => val === char)[0][0]
        ) return false
    }
    return !stack.length
}

const str = '[]'
console.log(isValid(str))