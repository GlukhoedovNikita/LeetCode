

const longestDecomposition = (str) => {
    let left = 0, right = str.length - 1
    let result = 0, tempStr = ''

    while (left <= right) {
        tempStr += str[left]
        let len = tempStr.length
        if (tempStr === str.slice(right - len + 1, right + 1)) {
            right -= len
            tempStr = ''
            if (left > right) result++
            else result += 2
        }
        left++
    }

    return result
}

const str = 'elvtoelvto'
console.log(longestDecomposition(str))