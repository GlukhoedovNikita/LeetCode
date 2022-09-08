
const findAnagrams = (str, anagram) => {
    const result = []
    const chars = {}

    for (char of anagram) {
        if (chars.hasOwnProperty(char)) chars[char] += 1
        else chars[char] = 1
    }

    let copy = {...chars}
    for (let i = 0; i < str.length - anagram.length + 1; i++) {
        let hit = true
        for (let j = i; j < i + anagram.length; j++) {
            if (copy.hasOwnProperty(str[j]) && copy[str[j]] > 0) {
                copy[str[j]] -= 1
            } else {
                hit = false
                break
            }
        }
        if (hit) result.push(i)
        copy = {...chars}
    }

    return result
}

const str = 'cbaebabacd'
const anagram = 'abc'

console.log(findAnagrams(str, anagram))