

const checkIfPangram = (str) => new Set(str).size === 26

const str = 'thequickbrownfoxjumpsoverthelazydg'
console.log(checkIfPangram(str))