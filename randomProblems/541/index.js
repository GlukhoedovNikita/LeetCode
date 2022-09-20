

const reverseStr = (str, value) => {
    const arr = str.split('')

    if (str.length < 2 * value && str.length >= value) {
        let left = 0, right = value - 1
        while (left < right) {
            const temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp

            left++
            right--
        }

        return arr.join('')
    }

    const length = arr.length - (arr.length % 2)
    for (let i = 0; i < length; i += 2 * value) {
        let left = i, right = i + value - 1
        while (left < right) {
            const temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp

            left++
            right--
        }
    }

    return arr.join('')
}

const str = 'abcd'
const value = 3

console.log(reverseStr(str, value))