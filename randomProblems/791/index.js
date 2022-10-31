

const customSortString = (order, string) => {
    let result = ''
    const collection = {}

    for (const char of string) collection[char] = 1 + (collection[char] || 0)

    for (const char of order) {
        let count = collection[char]
        if (count) result += char.repeat(count), collection[char] = null
    }

    for (const [char, count] of Object.entries(collection)) {
        if (count) result += char.repeat(count)
    }

    return result
}

const order = 'cba'
const string = 'abcd'

console.log(customSortString(order, string))