

const mergeSimilarItems = (arr1, arr2) => {
    const map = new Map()

    for (val of arr1) map.set(val[0], val[1] + (map.get(val[0]) || 0))
    for (val of arr2) map.set(val[0], val[1] + (map.get(val[0]) || 0))

    return [...map].sort((val1, val2) => val1[0] - val2[0])
}

const arr1 = [[1,1],[4,5],[3,8]]
const arr2 = [[3,1],[1,5]]

console.log(mergeSimilarItems(arr1, arr2))