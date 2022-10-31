

const findWinners = (arr) => {
    const loseCollection = {}

    for (const [win, lose] of arr) {
        loseCollection[win] = loseCollection[win] || 0
        loseCollection[lose] = 1 + (loseCollection[lose] || 0)
    }

    return Object
        .entries(loseCollection)
        .reduce((acc, [plasayer, lose]) => {
            if (!lose) acc[0].push(+player)
            if (lose === 1) acc[1].push(+player)
            
            return acc
        }, [[], []])
        .map((v) => v.sort((a, b) => a - b))
}

const arr = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
console.log(findWinners(arr))