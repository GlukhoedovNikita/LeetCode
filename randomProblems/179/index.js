

const largestNumber = (arr) => {
    const result = arr.sort((a, b) => {
        const str1 = `${a}${b}`
        const str2 = `${b}${a}`
        if (str1 === str2) return 0
        return str1 > str2 ? -1 : 1
    }).join('')

    return +result[0] ? result : '0' 
}



const arr = [3, 30, 34, 5, 9]
console.log(largestNumber(arr))