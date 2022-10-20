

const countDistinctIntegers = (arr) => {
    const helper = (number) => {
        if (number < 10) return number

        return +[...number.toString()].reverse().join('')
    }

    const set = new Set()

    for (val of arr) set.add(val), set.add(helper(val))

    return set.size
}

const arr = [89904,846787,965070,396570,847607,625317,851503,143414,954838,837423,988190,916423,771555,680073,575614,967207,965688]
console.log(countDistinctIntegers(arr))