

const balancedStringSplit = (string) => {
    return [...string].reduce((acc, v) => {
        acc.collection[v]++
        if (acc.collection['R'] === acc.collection['L']) acc.result++

        return acc
    }, {
        collection: {'R': 0, 'L': 0},
        result: 0
    }).result
}

const string = 'RLRRLLRLRL'
console.log(balancedStringSplit(string))