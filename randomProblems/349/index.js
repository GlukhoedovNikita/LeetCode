

const intersection = (arr1, arr2) => {
    const set1 = new Set(arr1)
    const set2 = new Set(arr2)

    return set1.size >= set2.size 
    ?  [...set2.values()].filter((v) => set1.has(v))
    :  [...set1.values()].filter((v) => set2.has(v))
}

const arr2 = [4,9,5]
const arr1 = [9,4,9,8,4]
console.log(intersection(arr1, arr2))