

const createTargetArray = (values, indexes) => {
    return values.reduce((acc, val, i) => {
        const index = indexes[i]

        if (acc[index] === undefined) acc[index] = val
        else acc.splice(index, 0, val)


        return acc
    }, [])
}

const values = [0,1,2,3,4]
const indexes = [0,1,2,2,1]

console.log(createTargetArray(values, indexes))