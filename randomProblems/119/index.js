

const getRow = (value) => {
    const triangle = [[1]]
    let index = 0

    if (value === 0) return triangle[0]

    while (index !== value) {
        const tempArr = []
        for (let i = 1; i < triangle[index].length; i++) {
            tempArr.push(triangle[index][i] + triangle[index][i - 1])
        }
        triangle.push([1, ...tempArr, 1])
        index += 1
    }

    return triangle[value]
}

const value = 3
console.log(getRow(value))