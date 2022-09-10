
const backspaceCompare = (str1, str2) => {
    const temp1 = []
    const temp2 = []

    for (char of str1) {
        if (char === '#') temp1.pop()
        else temp1.push(char)
    }

    for (char of str2) {
        if (char === '#') temp2.pop()
        else temp2.push(char)
    }

    return temp1.join('') === temp2.join('')
}

const str1 = 'y#fo##f'
const str2 = 'y#f#o##f'
console.log(backspaceCompare(str1, str2))