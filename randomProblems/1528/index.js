
const restoreString = (string, indices) => {
    return string.split('').reduce((acc, char, i) => {
        acc[indices[i]] = char
        return acc
    }, Array(string.length).fill(0)).join('')
}

const string = 'codeleet'
const indices = [4,5,6,7,0,2,1,3]

console.log(restoreString(string, indices))