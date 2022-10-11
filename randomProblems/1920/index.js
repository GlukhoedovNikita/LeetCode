

const buildArray = (arr) => {
    return arr.reduce((acc, _, i) => {
        acc[i] = arr[arr[i]]
        return acc
    }, Array(arr.length).fill(0))
}


const arr = [0, 2, 1, 5, 3, 4]
console.log(buildArray(arr))
