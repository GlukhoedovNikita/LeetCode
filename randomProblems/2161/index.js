

const pivotArray = (arr, pivot) => {
    const less = [], more = [], equally = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === pivot) equally.push(arr[i])
        if (arr[i] > pivot) more.push(arr[i])
        if (arr[i] < pivot) less.push(arr[i])
    }

    return [...less, ...equally, ...more]
}

const arr = [9,12,5,10,14,3,10]
const pivot = 10

console.log(pivotArray(arr, pivot))