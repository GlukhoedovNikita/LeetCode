
const intervalIntersection = (arr1, arr2) => {
    const result = []
    let left = 0, right = 0;


    while (left !== arr1.length && right !== arr2.length) {
        const maxStart = Math.max(arr1[left][0], arr2[right][0])
        const minEnd = Math.min(arr1[left][1], arr2[right][1])
        
        if (maxStart <= minEnd) result.push([maxStart, minEnd])

        if (arr1[left][1] < arr2[right][1]) left++
        else right++
    }

    return result
}

const arr1 = [[0,2],[5,10],[13,23],[24,25]]
const arr2 = [[1,5],[8,12],[15,24],[25,26]]

console.log(intervalIntersection(arr1, arr2))