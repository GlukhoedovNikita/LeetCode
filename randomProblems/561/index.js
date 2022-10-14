

const arrayPairSum = (array) => {
    let result = 0
    const sortedArray = array.sort((a, b) => a - b)

    for (let i = 1; i < sortedArray.length; i += 2) result += Math.min(sortedArray[i], sortedArray[i - 1])

    return result
}

const array = [6,2,6,5,1,2]
console.log(arrayPairSum(array))