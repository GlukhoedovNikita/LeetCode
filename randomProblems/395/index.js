


const longestSubstring = (string, k) => {
    const map = {}
    let result = 0, currentStart = 0

    for (char of string) map[char] = 1 + (map[char] || 0)

    if (Object.values(map).every((v) => v >= k)) return string.length

    for (let i = 0; i < string.length; i++) {
        const char = string[i]

        if (map[char] < k) {
            result = Math.max(
                result,
                longestSubstring(string.substr(currentStart, i - currentStart), k)
            )
            
            currentStart = i + 1
        }
    }

    result = Math.max(
        longestSubstring(string.substr(currentStart), k),
        result
    )

    return result
}

const string = 'bbaaacbd'
const k = 3

console.log(longestSubstring(string, k))