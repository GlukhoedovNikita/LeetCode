

const strStr = (hash, need) => hash.search(new RegExp(`${need}`))

const hash = 'leetcode'
const need = 'leet'

console.log(strStr(hash, need))