

const climbStairs = (n) => {
    if (n === 1) return 1
    if (n === 2) return 2

    const temp = [1, 2]
    let index = 2

    while (temp.length !== n) {
        temp.push(temp[index - 1] + temp[index - 2])
        index += 1
    }

    return temp[n - 1]
}

const n = 4
console.log(climbStairs(n))

// 1 - 1 / 1
// 2 - 1+1 2 /2
// 3 - 1+1+1 1+2 2+1 /3
// 4 - 1+1+1+1 1+2+1 2+1+1 1+1+2 2+2 /5