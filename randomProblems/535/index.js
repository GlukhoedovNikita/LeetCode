
const Solution = function() {
    this.collection = new Map()
    this.counter = '0'
}

Solution.prototype.encode = function(url) {
    this.collection.set(this.counter, url)
    this.counter++
    return this.counter
}

Solution.prototype.decode = function(url) {
    console.log(this.collection)
    return this.collection.get(url) || null
}

const obj = new Solution()
console.log(obj.encode('ajsdjasjdajsdjajsdjasd'))
console.log(obj.decode('0'))