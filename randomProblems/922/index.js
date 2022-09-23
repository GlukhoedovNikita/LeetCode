

const sortArrayByParityII = (arr) => {
    const arr1 = [], arr2 = []
    const result = []
    for (value of arr) {
        if (value % 2 === 0) arr1.push(value)
        else arr2.push(value)
    }

    let index1 = 0, index2 = 0

    for (let i = 0; i < arr.length; i++) {
        console.log(i)
        if (i % 2 === 0) {
            result.push(arr1[index1])
            index1++
        }
        else {
            result.push(arr2[index2])
            index2++
        }
    }
    return result
}

const arr = [4,2,5,7, 1]
console.log(sortArrayByParityII(arr))