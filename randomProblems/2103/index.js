

const countPoints = (rings) => {
    const map = {}
    let result = 0

    for (value of Array(10).fill(0).map((_, i) => i)) map[value] = ''

    for (let i = 0; i < rings.length; i += 2) {
        const color = rings[i]
        const number = rings[i + 1]
        map[number] += color
    }

    for ([key, value] of Object.entries(map)) {
        if (value.length >= 3 && new Set(value).size === 3) result++
        else continue
    }

    return result
}

const rings = "B0B6G0R6R0R6G9"

console.log(countPoints(rings))