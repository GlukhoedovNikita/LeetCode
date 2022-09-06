

// const merge = (arr1, length1, arr2, length2) => {
//     const result = []
//     let index = 0
//     const temp1 = arr1.filter(Boolean)
//     const temp2 = arr2.filter(Boolean)

//     if (length1 === 0) return temp2
//     if (length2 === 0) return temp1

//     for (i in temp1) {
//         while (temp1[i] > temp2[index] || index === length2 - 1) {
//             result.push(temp2[index])
//             index += 1
//         }
//         result.push(temp1[i])
//     }

//     return [...result, ...temp2.slice(index)]
// }

const merge = (arr1, length1, arr2, lenght2) => [...arr1.slice(0, length1), ...arr2].sort()

const arr1 = [1,2,3,0,0,0]
const length1 = 3
const arr2 = [2, 5, 6]
const length2 = 3

console.log(merge(arr1, length1, arr2, length2))