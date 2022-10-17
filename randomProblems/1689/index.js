
const minPartitions = (string) => {
    return [...string].reduce((acc, v) => {
        if (+v > acc) return +v
        return acc
    }, 0)
}

const string = '27346209830709182346'
console.log(minPartitions(string))