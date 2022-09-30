

const isLongPressedName = (name, typed) => {
    let index = 0

    for (let i = 0; i < typed.length; i++) {
        if (index < name.length && typed[i] === name[index]) {
            index++
        } else if (i === 0 || typed[i] !== typed[i - 1]) return false
    }

    return index === name.length
}

const name = 'allex'
const typed = 'aaleex'

console.log(isLongPressedName(name, typed))