

// const uniquePaths = (m, n) => {
//     const temp = Array(m).fill(Array(n).fill(0))
//     temp[0][0] = 1

//     for (let i = 0; i < temp.length; i++) {
//         for (let j = 0; j < temp[i].length; j++) {
//             if (i - 1 >= 0 && j - 1 >= 0) {
//                 temp[i][j] = temp[i - 1][j] + temp[i - 1][j - 1]
//                 // console.log(1)
//             } else {
//                 console.log(i, j)
//                 if (i - 1 < 0 && j - 1) break
//                 // if (i - 1 < 0) temp[i][j] = temp[i][j -1] + temp[i][j]
//                 // if (j - 1 < 0) temp[i][j] += temp[i - 1][j]
//             }
//         }
//     }

//     return temp
// }

// const m = 3
// const n = 2
// console.log(uniquePaths(m, n))