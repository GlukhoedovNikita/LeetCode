

const canJump = (arr) => {
    if (arr[0] === 0 && arr.length !== 1) return false

    let result = true
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            for (let index = i - 1; index >= 0; index--) {
                if (arr[index] > i - index || arr[index] + index === arr.length - 1) break
                if (index === 0) result = false
            }
        }
    }

    return result
}

const arr = [2,0,0]
console.log(canJump(arr))