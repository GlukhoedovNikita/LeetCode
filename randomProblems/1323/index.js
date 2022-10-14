

const maximum69Number = (val) => {
    return +[...`${val}`].reduce((acc, v) => {
        if (+v === 6 && acc.first) acc.result += '9', acc.first = false
        else acc.result += v
        return acc
    }, {
        result: '',
        first: true
    }).result
}

const val = 6669
console.log(maximum69Number(val))