

const rotate = (arr, number) => {
    if (number > arr.length) number %= arr.length

    const first = []
    let counter = number, index = 0

    while (counter > 0) first.push(arr[arr.length - counter]), counter--
    const last = arr.slice(0, arr.length - number)

    for (let i = 0; i < arr.length; i++) {
        if (first[i] !== undefined) arr[i] = first[i]
        else if (last[index] !== undefined) arr[i] = last[index], index++
    }

    return arr
}

const arr = [1, 2]
const number = 2

console.log(rotate(arr, number))