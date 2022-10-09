

const decodeMessage = (key, message) => {
    const map = new Map()
    let count = 0
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (char of key) {
        if (char.toLowerCase() !== char.toUpperCase() && !map.has(char)) {
            map.set(char, arr[count])
            count++
        }
    }

    return [...message].map((char) => {
        if (char.toLowerCase() !== char.toUpperCase()) return map.get(char)
        return char
    }).join('')
}

const key = 'eljuxhpwnyrdgtqkviszcfmabo'
const message = 'zwx hnfx lqantp mnoeius ycgk vcnjrdb'

console.log(decodeMessage(key, message))
