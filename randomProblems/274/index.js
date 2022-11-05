
const hIndex = (arr) => {
    arr.sort((a, b) => b - a)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= i) return i
    }


    return arr.length
}

const arr = [1,3,1]
console.log(hIndex(arr))