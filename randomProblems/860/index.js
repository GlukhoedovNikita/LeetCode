
const lemonadeChange = (bills) => {
    const arrayFive = []
    const arrayTen = []

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            arrayFive.push(5)
        } else if (bills[i] === 10) {
            if (!arrayFive.length) return false
            arrayFive.pop()
            arrayTen.push(10)
        } else {
            if (arrayTen.length && arrayFive.length) {
                arrayTen.pop()
                arrayFive.pop()
            } else if (!arrayTen.length && arrayFive.length >= 3) {
                arrayFive.splice(arrayFive.length - 3, 3)
            } else {
                return false
            }
        }
    }

    return true
}

const bills = [5, 5, 5, 5, 20, 20, 5, 5, 20, 5]
console.log(lemonadeChange(bills))