

const findFinalValue = (arr, original) => {
    const set = new Set(arr)

    while (true) {
        if (set.has(original)) original *= 2
        else return original
    }
}

const arr = [2,7,9]
const original = 4

console.log(findFinalValue(arr, original))