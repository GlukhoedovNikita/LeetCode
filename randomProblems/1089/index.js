

const duplicateZeros = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === 0) {
            let prev = arr[i + 1]
            for (let j = i + 2; j < arr.length; j++) {
                let temp = arr[j]
                arr[j] = prev
                prev = temp
            }

            arr[++i] = 0
        }
    }

    return arr
}

const arr = [1,0,2,3,4,5,0]
console.log(duplicateZeros(arr))