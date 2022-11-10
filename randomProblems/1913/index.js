
const maxProductDifference = (arr) => {
    const helper = (maximum = true) => {
        let result1 = (maximum) ? -Infinity : Infinity
        let result2 = (maximum) ? -Infinity : Infinity

        for (const val of arr) {
            if (maximum) {
                if (val > result1 && val > result2) result2 = result1, result1 = val 
                else if(val > result2) result2 = val 
            } else {
                if (val < result1 && val < result2) result2 = result1, result1 = val 
                else if(val < result2) result2 = val
            }
        }

        return result1 * result2
    }

    return helper() - helper(false)
}

const arr = [9, 5,6,2,7,7, 8]
console.log(maxProductDifference(arr))