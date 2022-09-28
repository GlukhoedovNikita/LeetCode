

const reverseOnlyLetters = (str) => {
    const arr = str.split('')
    let left = 0; right = arr.length - 1

    while (left < right) {
        if (arr[left].toLowerCase() === arr[left].toUpperCase()) {
            left++
            continue
        }

        if (arr[right].toLowerCase() === arr[right].toUpperCase()) {
            right--
            continue
        }

        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }

    return arr.join('')
}

const str = 'ab-cd'
console.log(reverseOnlyLetters(str))