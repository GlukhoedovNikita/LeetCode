

const countConsistentStrings = (allowed, arr) => {
    const set = new Set(allowed)
    let result = 0

    for (word of arr) {
        let allow = true
        for (char of word) {
            if (!set.has(char)) {
                allow = false
                break
            }
        }
        allow && result++
    }

    return result
}

const allowed = 'abc'
const arr = ["a","b","c","ab","ac","bc","abc"]

console.log(countConsistentStrings(allowed, arr))
