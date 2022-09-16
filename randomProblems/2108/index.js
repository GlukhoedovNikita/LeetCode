

const firstPalindrome = (arr) => {
    for (value of arr) {
        if (value === value.split('').reverse().join('')) return value
    }

    return ''
}

const arr = ["abc","car","ada","racecar","cool"]
console.log(firstPalindrome(arr))