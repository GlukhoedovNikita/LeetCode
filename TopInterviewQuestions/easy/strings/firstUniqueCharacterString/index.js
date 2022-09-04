const firstUniqChar = (str) => {
    const map = new Map()
    for (char of str) {
        if (map.has(char)) map.set(char, map.get(char) + 1)
        else map.set(char, 1)
    }

    return str.indexOf([...map.entries()].find(([key, v]) => v === 1)?.[0])
}

const str = "aabb"
console.log(firstUniqChar(str))