

const minOperations = (boxes) => {
    const boxIndexes = []
    const result = []

    const countOperation = (index) => {
        return boxIndexes.reduce((acc, v) => {
            return acc + Math.abs(index - v)
        }, 0)
    }

    for (let i = 0; i < boxes.length; i++) {
        if (+boxes[i]) boxIndexes.push(i)
    }

    for (let i = 0; i < boxes.length; i++) result.push(countOperation(i))

    return result
}

const boxes = '110'
console.log(minOperations(boxes))
