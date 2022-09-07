

const fib = (n) => {
    if (n === 0) return 0
    if (n === 1) return 1

    const temp = [0, 1]
    let index = 2
    while(temp.length !== n + 1) {
        temp.push(temp[index - 1] + temp[index - 2])
        index += 1
    }

    return temp[n]
}

const n = 4
console.log(fib(n))