
const MedianFinder = function() {
    this.arr = []
}

MedianFinder.prototype.addNum = function(value) {
    const index = this.arr.findIndex((v) => v > value)

    if (index === -1) this.arr.push(value)
    else this.arr.splice(index, 0, value)
}

MedianFinder.prototype.findMedian = function() {
    const len = this.arr.length
    const mid = Math.floor(len / 2)

    if (len % 2 === 0) {
        return (this.arr[mid] + this.arr[mid - 1]) / 2
    }

    return this.arr[mid]
}

const obj = new MedianFinder()
obj.addNum(1)
obj.addNum(4)
obj.addNum(2)
obj.addNum(1)
console.log(obj.findMedian())