
const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false
    const map = new Map()

    for (char of str1) {
        if (map.has(char)) map.set(char, map.get(char) + 1)
        else map.set(char, 1)
    }

    for (char of str2) {
        if (map.has(char)) map.set(char, map.get(char) - 1)
        else return false
    }


    return [...map.values()].filter(Boolean).length ? false : true
}

const str1 = "rat"
const str2 = "car"

console.log(isAnagram(str1, str2))