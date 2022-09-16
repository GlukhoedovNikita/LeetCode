

const reversePrefix = (str, char) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            const reverse = str.slice(0, i + 1).split('')
            let left = 0, right = reverse.length - 1

            while (left < right) {
                const temp = reverse[left]
                reverse[left] = reverse[right]
                reverse[right] = temp
                left++
                right--
            }
            return reverse.join('') + str.slice(i + 1)
        }
    }

    return str
}

const str = 'abcdefd'
const char = 'e'

console.log(reversePrefix(str, char))