const myAtoi = (str) => {
    let result = ''
    let negative = false

    for (index in str) {
        if (str[index] === ' ' ||
            str[index] === '+' ||
            str[index] === '-' ||
            +str[index] ||
            +str[index] === 0) {
            if (str[index] === '-') {
                if (result.length) break
                if (+str[+index + 1] || +str[+index + 1] === 0) negative = true
                else break
            }
            if (str[index] === ' ') if (result.length) break

            if (str[index] === '+') {
                if (result.length) break
                if (!(+str[+index + 1] || +str[+index + 1] === 0) || str[+index + 1] === ' ') break
            }
            if (str[index] !== ' ' && (+str[index] || +str[index] === 0)) {
                result += str[index]
            }
        }
        else break
    }

    if (+result > 2 ** 31 && negative) result = (2 ** 31).toString()
    if (+result > 2 ** 31 - 1 && !negative) result = (2 ** 31 - 1).toString()

    return negative ? -+result : +result
}

const str = "  +  413"
console.log(myAtoi(str))