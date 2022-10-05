
const sortColors = (arr) => {
    const colors = [0, 0, 0]

    for (val of arr) {
        colors[val]++
    }

    for (let i = 0; i < arr.length; i++) {
        if (colors[0] !== 0) {
            arr[i] = 0
            colors[0]--
            continue
        }

        if (colors[1] !== 0) {
            arr[i] = 1
            colors[1]--
            continue
        }

        if (colors[2] !== 0) {
            arr[i] = 2
            colors[2]--
            continue
        }
    }

    return arr
}

const arr = [2,0,2,1,1,0]
console.log(sortColors(arr))