
const findMedianSortedArrays = (arr1, arr2) => {
    const sortedArray = []
    let index1 = 0
    let index2 = 0

    while (index1 !== arr1.length || index2 !== arr2.length) {
        if (index1 === arr1.length) {
            sortedArray.push(arr2[index2])
            index2++
            continue
        }
        if (index2 === arr2.length) {
            sortedArray.push(arr1[index1])
            index1++
            continue
        }

        if (arr1[index1] <= arr2[index2]) {
            sortedArray.push(arr1[index1])
            index1++
        } else {
            sortedArray.push(arr2[index2])
            index2++
        }
    }

    return sortedArray.length % 2 
    ? sortedArray[Math.floor(sortedArray.length / 2)] 
    : (sortedArray[sortedArray.length / 2 - 1] + sortedArray[sortedArray.length / 2]) / 2
}

const arr1 = [1, 3]
const arr2 = [2]

console.log(findMedianSortedArrays(arr1, arr2))