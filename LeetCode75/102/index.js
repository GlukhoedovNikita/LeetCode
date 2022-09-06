
const levelOrder = (tree) => {
    const result = []
    if (tree === null) return result
    
    const queue = []
    queue.push(tree)

    while (queue.length) {
        let size = queue.length
        const level = []

        while(size) {
            let current = queue.shift()
            level.push(current.val)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
            size -= 1
        }
        result.push(level)
    }

    return result
}