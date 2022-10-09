

const longestValidParentheses = (str) => {
    const stack = [-1]
    let result = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') stack.push(i)
        else if (stack.length === 1) stack[0] = i
        else stack.pop(), result = Math.max(result, i - stack.at(-1))
    }

    return result
}

const str = ')()())'
console.log(longestValidParentheses(str))