

const RandomizedSet = function() {
    this.collection = {}
}

RandomizedSet.prototype.insert = function(val) {
    const result = !Object.hasOwn(this.collection, val)
    this.collection[val] = 1

    return result
}

RandomizedSet.prototype.remove = function(val) {
    const result = Object.hasOwn(this.collection, val)
    delete this.collection[val]

    return result
}

RandomizedSet.prototype.getRandom = function() {
    const arrayValues = Object.keys(this.collection)
    return arrayValues[Math.floor(Math.random() * arrayValues.length)]
}

const obj = new RandomizedSet()
console.log(obj.insert(1))
console.log(obj.insert(3))
console.log(obj.insert(3))
console.log(obj.insert(1))
console.log(obj.insert(2))
console.log(obj.getRandom())