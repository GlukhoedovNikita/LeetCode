

const shortestToChar = (str, char) => {
    const indexes = [], result = []

    for (let i = 0; i < str.length; i++) if (str[i] === char) indexes.push(i)

    let left = 0, right = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            left = right
            right++
            result.push(0)
            continue
        }

        const distanceLeft = Math.abs(i - indexes[left])
        const distanceRight = Math.abs(indexes[right] - i)

        if (!distanceLeft) result.push(distanceRight)
        if (!distanceRight) result.push(distanceLeft)

        if (distanceLeft && distanceRight) result.push(Math.min(distanceLeft, distanceRight))
    }

    return result
}

const str = 'loveleetcode'
const char = 'e'

console.log(shortestToChar(str, char))