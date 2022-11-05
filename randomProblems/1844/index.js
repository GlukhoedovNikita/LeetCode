

const replaceDigits = (string) => {
    return [...string].reduce((acc, char, i, arr) => {
        if (Number.isInteger(+char)) {
            acc += String.fromCharCode(arr[i - 1].charCodeAt() + +char)
        } else acc += char

        return acc
    }, '')
}

const string = 'a1c1e1'
console.log(replaceDigits(string))













console.log('a'.charCodeAt())
console.log('b'.charCodeAt())

const shift = (char, val) => {
    if (typeof val !== 'number') throw Error('Val - Type Number required')
    return String.fromCharCode(char.charCodeAt() + val)
}