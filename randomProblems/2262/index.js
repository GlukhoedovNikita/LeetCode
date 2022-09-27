

const appealSum = (str) => {
    let start = 0;
    let result = 0

    while (start !== str.length) {
        for (let i = start + 1; i < str.length + 1; i++) {
            result += new Set(str.slice(start, i)).size
        }
        start++
    }

    return result
}

const str = 'code'
console.log(appealSum(str))