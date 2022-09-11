
const isValid = (str) => {
    const stack = []
    for (char of str) {
        if (char === ')' || char === ']' || char === '}') {
            if (char === ')' && stack.pop() !== '(') return false
            if (char === ']' && stack.pop() !== '[') return false
            if (char === '}' && stack.pop() !== '{') return false
        } else {
            stack.push(char)
        }
    }

    return !stack.length
}

const str = '(]'
console.log(isValid(str))