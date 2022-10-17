

const minAddToMakeValid = (string) => {
    const stack = []
    let count = 0

    for (char of string) {
        if (char === ')') {
            if (!stack.length) count++
            else stack.pop()
        } else stack.push(char)
    }


    return stack.length + count
}

const string = '((('
console.log(minAddToMakeValid(string))