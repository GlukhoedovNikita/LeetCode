

// const singleNumber = (arr) => {
//     const map = {}
//     for (value of arr) map[value] = 1 + (map[value] || 0)


//     for (const [key, val] of Object.entries(map)) {
//         if (val === 1) return key
//     }
// }

const singleNumber = (arr) => {
    const calcSum = (arr) => arr.reduce((acc, prev) => acc + prev, 0)

    const arrSum = calcSum(arr)
    const set = [...new Set(arr)]
    const setSum = calcSum(set)

    return (3 * setSum - arrSum) / 2
}

const arr = [0,1,0,1,0,1,99]
console.log(singleNumber(arr))