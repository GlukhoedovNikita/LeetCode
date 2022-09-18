

const generateParenthesis = (value) => {
    const result = []

    const helper = (str, left, right) => {
        if (left === value && right === value) {
            result.push(str)
            return
        }

        if (left !== value) {
            helper(str + '(', left + 1, right)
        }

        if (left > right) {
            helper(str + ')', left, right + 1)
        }
    }

    helper('', 0, 0)
    return result
}

const value = 3
console.log(generateParenthesis(value))