
const interpret = (command) => {
    return command.split('').reduce((acc, char, i) => {
        if (char === 'G') acc.result += char
        else {
            acc.substring += char
            if (acc.collection[acc.substring]) {
                acc.result += acc.collection[acc.substring]
                acc.substring = ''
            }
        }

        return acc
    }, {
        result: '',
        substring: '',
        collection: {
            '()': 'o',
            '(al)': 'al',
        }
    }).result
}

const command = "G()()()()(al)"
console.log(interpret(command))