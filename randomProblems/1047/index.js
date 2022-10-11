

const removeDuplicates = (str) => {
    const stack = []

    for (const char of str) {
        if (char == stack.at(-1)) stack.pop()
        else stack.push(char)
    }

    return stack.join('')
}

const str = 'azxxzy'
console.log(removeDuplicates(str))