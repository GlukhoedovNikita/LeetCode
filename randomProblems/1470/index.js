

const shuffle = (arr, n) => {
    let left = 0, right = 1
    return arr.reduce((acc, v, i) => {
        if (n > i) acc[left] = v, left += 2
        else acc[right] = v, right += 2

        return acc
    }, [])
}

const arr = [2, 5, 1, 3, 4, 7]
const n = 3

console.log(shuffle(arr, n))