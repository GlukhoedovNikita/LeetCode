
const Node = function(url) {
    this.url = url
    this.next = null
    this.prev = null
}

const BrowserHistory = function(homepage) {
    this.head = new Node(homepage)
    this.curr = this.head
}

BrowserHistory.prototype.visit = function(url) {
    const node = new Node(url)
    this.curr.next = node
    node.prev = this.curr
    this.curr = node
}

BrowserHistory.prototype.forward = function(val) {
    while (this.curr.next !== null && val-- > 0) {
        this.curr = this.curr.next
    }

    return this.curr.url
}

BrowserHistory.prototype.back = function(val) {
    while (this.curr.prev !== null && val-- > 0) {
        this.curr = this.curr.prev
    }

    return this.curr.url
}

const browser = new BrowserHistory('l')
browser.visit('g')
browser.visit('f')
browser.visit('y')
console.log(browser.back(1))
console.log(browser.back(1))
console.log(browser.forward(1))
console.log(browser)
browser.visit('link')
console.log(browser.forward(2))
console.log(browser.back(2))
console.log(browser)
