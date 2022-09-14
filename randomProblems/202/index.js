

const isHappy = (value) => {
    const helper = (value) => {
        let result = 0
        const temp = value.toString().split('')

        for (v of temp) {
            result += v ** 2
        }

        return result
    }
    
    let result = helper(value)
    const temp = new Set()
    temp.add(result)

    while(true) {
        if (result === 1) return true
        else {
            result = helper(result)
            if (temp.has(result)) return false
            else temp.add(result)
        }
    }
}

const value = 2
console.log(isHappy(value))