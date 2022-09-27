

const FreqStack = function () {
    this.fmap = new Map()
    this.stack = []
}
FreqStack.prototype.push = function (x) {
    let freq = (this.fmap.get(x) || 0) + 1
    this.fmap.set(x, freq)
    if (!this.stack[freq]) this.stack[freq] = [x]
    else this.stack[freq].push(x)
}

FreqStack.prototype.pop = function () {
    let top = this.stack[this.stack.length - 1], x = top.pop()
    if (!top.length) this.stack.pop()
    this.fmap.set(x, this.fmap.get(x) - 1)
    return x
}


const stack = new FreqStack()

stack.push(4)
stack.push(0)
stack.push(9)
stack.push(3)
stack.push(4)
stack.push(2)
console.log(stack.pop())
stack.push(6)
console.log(stack.pop())
stack.push(1)
console.log(stack.pop())
stack.push(1)
console.log(stack.pop())
stack.push(4)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack)
console.log(stack.pop())

console.log(stack)