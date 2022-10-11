

const nthUglyNumber = (n, ...divisors) => {
    const helper = (number, arr) => {
        for (const divisor of arr) {
            if (!(number % divisor)) return true
        }

        return false
    }

    let result = 1, counter = 0

    while (counter !== n) {
        result++
        if (helper(result, divisors)) counter++
    }

    return result
}

const n = 5
const divisors = [2, 11, 12]

console.log(nthUglyNumber(n, ...divisors))