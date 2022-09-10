

const decodeString = (str) => {
    let s = ''
    let number = ''
    const stack = []

    for (char of str) {
        if (Number.isInteger(+char)) {
            number += char
            continue
        } 
        if (char === '[') {
            stack.push(s)
            stack.push(+number)
            s = ''
            number = ''
            continue
        }
        if (char === ']') {
            const prevNum = stack.pop()
            const prevStr = stack.pop()
            s = prevStr + Array(prevNum).fill(s).join('')
            continue
        }
        s += char
    }

    return s
}

const str = '100[leetcode]'
console.log(decodeString(str))
