

const sumOddLengthSubarrays = (arr) => {
    const sumSubArray = (arr) => arr.reduce((acc, v) => acc + v, 0)


    let counter = arr.length % 2 ? Math.floor(arr.length / 2) + 1 : arr.length / 2
    let result = 0, temp = 1

    while (counter) {
        for (let i = 0; i <= arr.length; i++) {
            if (i + temp <= arr.length) result += sumSubArray(arr.slice(i, temp + i))
            else break
        }
        temp += 2
        counter--
    }

    return result
}

const arr = [1,4,2,5,3]
console.log(sumOddLengthSubarrays(arr))