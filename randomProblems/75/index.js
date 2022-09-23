

const sortColors = (arr) => {
    const colors = [0, 0, 0]

    for (value of arr) colors[value]++
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i < colors[0] ? 0 : (colors[0] + colors[1] > i ? 1 : 2)

    }

    return arr
}

const arr = [2,0,2,1,1,0]
console.log(sortColors(arr))