

const search = (arr, target) => {
    let end = arr.length - 1
    let start = 0

    while (start <= end) {
        const medium = Math.floor((end + start) / 2)
        if (arr[medium] === target) return medium
        
        if (arr[medium] > target) end = medium - 1
        else start = medium + 1
    }

    return -1
}

const arr = [-1,0,3,5,7, 9, 10]
const tagret = 7

console.log(search(arr, tagret))