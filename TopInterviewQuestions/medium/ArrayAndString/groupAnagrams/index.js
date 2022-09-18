
const groupAnagrams = (arr) => {
    const map = {}
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const sortedWord = arr[i].split('').sort().join('')
        if (map[sortedWord]) {
            map[sortedWord] = [map[sortedWord][0] + 1, [...map[sortedWord][1], arr[i]]]
        } else {
            map[sortedWord] = [1, [arr[i]]]
        }
    }


    for (value of Object.values(map).sort((a, b) => a[0] - b[0])) {
        result.push(value[1])
    }

    return result
}

const arr = ["a", 'b', 'c']
console.log(groupAnagrams(arr))