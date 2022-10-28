

const countMatches = (items, ruleKey, ruleValue) => {
    return items.reduce((acc, v) => {
        if (v[acc.collection[ruleKey]] === ruleValue) acc.result++
        return acc
    }, {
        result: 0,
        collection: {
            'type': 0,
            'color': 1,
            'name': 2,
        }
    }).result
}

const items = []
const ruleKey = ''
const ruleValue = ''

console.log(countMatches(items, ruleKey, ruleValue))