

const tribonacci = (value) => {
    if (value === 0) return 0
    if (value === 1) return 1
    if (value === 2) return 1

    const array = [0, 1, 1]
    let count = 2

    while (count !== value) {
        array.push(array[count - 1] + array[count - 2] + array[count])
        count++
    }

    return array[value]
}

const value = 25
console.log(tribonacci(value))