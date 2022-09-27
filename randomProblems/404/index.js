

const sumOfLeftLeaves = (root) => {
    let result = 0
    const dfs = (node) => {
        if (!node) return 

        if (node.left) {
            if (!node.left.left && !node.left.right) result += node.left.val
            dfs(node.left)
        }
        if (node.right) dfs(node.right)
    }

    dfs(root)

    return result
}