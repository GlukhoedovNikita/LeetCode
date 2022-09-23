

const averageOfLevels = (root) => {
    const queue = [root], result = []

    while (queue.length) {
        let sum = 0, len = queue.length
        for (let i = 0; i < len; i++) {
            const current = queue.shift()
            sum += current.val
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        result.push(sum / len)
    }


    return result
}