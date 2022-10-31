

const findMinFibonacciNumbers = (number) => {
    let result = 0
    let arr = [1, 1]

    while (number) {

        while (true) {
            const newFib = arr.at(-1) + arr.at(-2)
            arr.push(newFib)
            if (newFib === number) return result + 1
            if (newFib > number) break
        }

        number -= arr.at(-2)
        if (!number) return result + 1
        let index = 2

        for (let i = arr.length - 2; i <= 2; i--) {
            if (arr[i] === number) {
                index = i + 1
                break
            }
            if (arr[i] < number) {
                index = i + 2
                break
            } 
        }

        arr = arr.slice(0, index)
        result++
    }

    return result
}

const number = 7
console.log(findMinFibonacciNumbers(number))