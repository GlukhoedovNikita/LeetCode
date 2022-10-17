

const maxSatisfaction = (arr) => {
    arr.sort((a, b) => b - a)
    let result = 0, dpSum = 0, current = 0

    for (let i = 0; i < arr.length; i++) {
        current += dpSum + arr[i]
        dpSum += arr[i]
        result = Math.max(current, result)
    }

    return result
}

const arr = [-2,5,-1,0,3,-3]
console.log(maxSatisfaction(arr))
