


const maxRotateFunction = (arr) => {
    let result = -Infinity
    
    const sumArray = (arr) => arr.reduce((acc, v, i) => acc + v * i, 0)
    const rotateArray = (arr, i) => [...arr.slice(arr.length - 1 - i), ...arr.slice(0, arr.length - 1 - i)]
    

    for (let i = 0; i < arr.length; i++) {
        result = Math.max(sumArray(rotateArray(arr, i - 1)), result)
    }

    return result
}

const arr = [100]
console.log(maxRotateFunction(arr))