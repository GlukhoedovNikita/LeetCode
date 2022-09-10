

// const maxDepth = (root) => {
//     if (root === null) return 0
    
//     const result = 0
//     const queue = []
//     queue.push(root)

//     while (queue.length) {
//         const size = queue.length
//         result += 1
//         while(size--) {
//             const current = queue.shift()

//             if (current.left) queue.push(current.left)
//             if (current.right) queue.push(current.right)
//         }
//     }

//     return result
// }

const maxDepth = (root) => {
    let result = 0

    const bfs = (node, level) => {
        if (!node) return 

        if (level > result) {
            result = level
        }

        if (node.left) bfs(node.left, level + 1)
        if (node.right) bfs(node.right, level + 1)
    }
    bfs(root, 1)

    return result
}