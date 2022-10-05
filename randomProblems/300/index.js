

const lengthOfLIS = (arr) => {
    if (arr.length === 0) return 0
    let result = 1
    const dp = Array(arr.length).fill(1)

    for (let i = 1; i < arr.length; i++) {
        dp[i] = Math.max(1, ...dp.slice(0, i).map((v, j) => arr[i] > arr[j] ? v + 1 : 0))

        result = Math.max(result, dp[i])
    }

    return result
}

const arr = [7,7,7,7,7,7,7]
console.log(lengthOfLIS(arr))