const removeDuplicates = (arr) => arr.filter((v, i, arr) => {
    if (i > 0) return v !== arr[i - 1]
    else return true
})

const arr = [1, 1, 2]

console.log(removeDuplicates(arr))