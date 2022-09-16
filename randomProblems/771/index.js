

const numJewelsInStones = (jewels, stones) => {
    const map = {}
    let result = 0

    for (value of jewels) map[value] = 1 + (map[value] || 0)

    for (stone of stones) {
        if (map[stone]) result += 1
    }

    return result
}

const jewels = 'aA'
const stones = 'aAAbbbb'

console.log(numJewelsInStones(jewels, stones))