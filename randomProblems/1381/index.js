

const CustomStack = function(max) {
    this.collection = new Map()
    this.len = 0
    this.max = max
}

CustomStack.prototype.push = function(value) {
    if (this.len === this.max) return
    this.collection.set(this.len, value)
    this.len++
}

CustomStack.prototype.pop = function() {
    if (this.len === 0) return -1

    this.len--
    const deleted = this.collection.get(this.len)
    this.collection.delete(this.len)

    return deleted
}

CustomStack.prototype.increment = function(len, inc) {
    for (let [key, val] of this.collection) {
        if (len === 0) break
        this.collection.set(key, val + inc)
        len--
    }
}

const stack = new CustomStack(1)
stack.push(1)
stack.push(2)
stack.push(3)
stack.increment(2, 5)
console.log(stack)
