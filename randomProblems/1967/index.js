
const myIncludes = function(substring) {
    const string = this
    if (substring.length > string.length) return false

    let index = 0

    for (let i = 0; i < string.length; i++) {
        if (string[i] === substring[index]) {
            index++
            if (index === substring.length) return true
        } else {
            i -= index
            index = 0
        }
    }   

    return false
}

String.prototype.myIncludes = myIncludes

const numOfStrings = (arr, string) => {
   return arr.reduce((acc, substr) => {
        return acc + (string.myIncludes(substr) ? 1 : 0)
   }, 0)
}

const arr = ["a","abc","bc","d"]
const string = 'abc'

console.log(numOfStrings(arr, string))
