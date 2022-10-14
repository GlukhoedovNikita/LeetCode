

const countVowelStrings = (val, start = 0) => {
    if (!val) return 1

    let result = 0

    for (let i = start; i < 5; i++) {
        result += countVowelStrings(val - 1, i)
    }

    return result
}

const val = 33
console.log(countVowelStrings(val))