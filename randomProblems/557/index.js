

const reverseWords = (str) => str.split(' ').map((word) => word.split('').reverse().join('')).join(' ')

const str = 'Let"s take LeetCode contest'
console.log(reverseWords(str))