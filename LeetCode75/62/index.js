
const uniquePaths = (m, n) => {
    const temp = Array(m).fill(Array(n).fill(1))

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            temp[i][j] = temp[i - 1][j] + temp[i][j - 1]
        }
    }

    return temp[m - 1][n - 1]
}

const m = 3
const n = 7
console.log(uniquePaths(m, n))