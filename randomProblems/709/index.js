

const func = function(callback, initialValue) {
    const arr = this
    let acc = initialValue

    for (let i = 0; i < arr.length; i++) {
        acc = callback(acc, arr[i], i, arr)
    }

    return acc
}

Array.prototype.func = func

const toLowerCase = (string) => {
    const callback = (acc, char) => acc + char.toLowerCase()
    return string.split('').func(callback, '')
}

const string = 'LOVELY'
console.log(toLowerCase(string))
