

// const minWindow = (str1, str2) => {
//     const map = {}
//     let result = ''

//     for (c of str2) map[c] = 1 + (map[c] || 0)
//     if (str2.length === 1) return str1.includes(str2[0]) ? str2[0] : ''

//     let tempCollection = {...map}
//     let start = undefined, first = true

//     for (let i = 0; i < str1.length; i++) {
//         const char = str1[i]
//         if (Object.hasOwn(tempCollection, char)) {
//             if (start === undefined) start = i
//             tempCollection[char] -= 1
//             if (tempCollection[char] === 0) delete tempCollection[char]
//         }

//         if (!Object.keys(tempCollection).length) {
//             tempCollection = {...map}
//             if (!result.length || result.length > i - start + 1) result = str1.slice(start, i + 1)
//             i = start, start = undefined, first = true
//         }
//     }

//     return result
// }

const minWindow = function (s, t) {
    if (!s || !t || s.length < t.length) return ""

    let l = 0, r = 0
    let count = 0, minI = s.length + 1, minL = s.length + 1

    const freqMap = {}
    for (const ch of t) freqMap[ch] = (freqMap[ch] || 0) + 1

    while (r < s.length) {
        if (freqMap[s[r]]-- >= 1) count += 1
        r += 1

        while (count == t.length) {
            if (r - l < minL) {
                minL = r - l
                minI = l
            }
            if (freqMap[s[l]]++ >= 0) count -= 1
            l += 1
        }
    }
    return s.slice(minI, minI + minL)
}

const str1 = 'bba'
const str2 = 'ab'

console.log(minWindow(str1, str2))