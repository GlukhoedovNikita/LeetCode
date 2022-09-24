

const postorderTraversal = (root) => {
    const result = []
    const dfs = (node) => {
        if (!node) return 

        if (node.left) dfs(node.left)
        if (node.right) dfs(node.right)
        result.push(node.val)
    }
    dfs(root)

    return result
}