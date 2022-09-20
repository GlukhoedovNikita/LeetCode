

const jump = (arr) => {
    let count = 0
    let i = 0   
    if (arr.length === 1) return count

    while (i < arr.length) {
        const val = arr[i]
        let max = 0
        let index = 1

        
        for (let j = 1; j <= val; j++) {
            if (max < arr[i + j]) {
                max = arr[i + j]
                index = j + i 
            }
        }
        
        count++
        if (i + val >= arr.length - 1) return count
        
        i += index
    }

    return count
}


const arr = [1,1,1,1]
console.log(jump(arr))
