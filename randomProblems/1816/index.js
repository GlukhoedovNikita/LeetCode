

const truncateSentence = (string, val) => {
    return string.split(' ').slice(0, val).join(' ')
}

const string = 'Hello how are you Contestant'
const val = 4

console.log(truncateSentence(string, val))
