

const subdomainVisits = (arr) => {
    const collection = {}

    const helper = (string, val) => {
        let s = ''
        const arr = string.split('.').reverse()
        for (str of arr) {
            if (s) s = `${str}.${s}`
            else s = str

            collection[s] = +val + (collection[s] || 0)
        }

        return
    }

    for (const string of arr) {
        const [value, subString] = string.split(' ')
        helper(subString, value)
    }

    return Object.entries(collection)
        .map(([key, value]) => `${value} ${key}`)
}

const arr = ["9001 discuss.leetcode.com"]
console.log(subdomainVisits(arr))