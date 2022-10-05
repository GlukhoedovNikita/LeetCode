

const increasingTriplet = (arr) => {
    let min = Infinity, mid = Infinity

    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i])
        if (min !== Infinity && arr[i] !== min) mid = Math.min(arr[i], mid)
        if (arr[i] > mid && min !== Infinity && mid !== Infinity) return true
    }

    return false
}

const arr = [1, 2]
console.log(increasingTriplet(arr))