
const maximumGroups = (grades) => {
    let result = 0
    let count = 1, sum = 0
    grades.sort((a, b) => a - b)

    for (let i = 0; i < grades.length; i++) {
        let tempCount = count + 1
        let tempSum = 0 
        
        while (tempCount) {
            if (i === grades.length) break
            tempSum += grades[i]
            i++, tempCount--
        }

        if (tempSum > sum) result++, i--
        else i -= count + 1

        sum = tempSum
        count++
    }

    return result
}

const grades = [8,8]
console.log(maximumGroups(grades))