// const isSubsequence = (str1, str2) => {
//     const map = new Map()

//     for (index in str1) {
//         if (map.has(str1[index])) map.set(str1[index], map.get(str1[index] + 1))
//         else map.set(str1[index], 1)
//     }

//     for (index in str2) {
//         if (map.has(str2[index])) map.set(str2[index], map.get(str2[index] - 1))
//     }

//     return ![...map.values()].filter(Boolean).length
// }

// const isSubsequence = (str1, str2) => {
//     const map = new Map()
//     for (index in str1) {
//         if (map.has(str1[index])) map.set(str1[index], map.get(str1[index] + 1))
//         else map.set(str1[index], 1)
//     }

//     const temp = []
//     for (index in str2) {
//         if (map.has(str2[index])) {
//             map.set(str2[index], map.get(str2[index]) - 1)
//             temp.push(str2[index])
//         }
//     }

//     return temp.join('') === str1
// }

const isSubsequence = (str1, str2) => {
    let index1 = 0
    for (index in str2) {
        if (str2[index] === str1[index1]) index1++
    }
    return str1.length === index1
}

const str1 = 'abc'
const str2 = 'ahcbgd'

console.log(isSubsequence(str1, str2))