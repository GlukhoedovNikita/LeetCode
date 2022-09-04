const isIsomorphic = (str1, str2) => {
    const map1 = new Map()
    const map2 = new Map()

    if (str1.length !== str2.length) return false

    for (index in str1) {
        if (map1.has(str1[index])) {
            const prev = map1.get(str1[index])
            map1.set(str1[index],  prev + 1)
        }
        else map1.set(str1[index], 0)

        if (map2.has(str2[index])) {
            const prev = map2.get(str2[index])
            map2.set(str2[index], prev + 1)
        }
        else map2.set(str2[index], 0)

        if (JSON.stringify([...map1.values()]) !== JSON.stringify([...map2.values()])) return false
    }

    return true
}

const str1 = 'paper'
const str2 = 'title'

console.log(isIsomorphic(str1, str2))