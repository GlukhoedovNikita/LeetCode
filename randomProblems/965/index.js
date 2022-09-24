

const isUnivalTree = (root) => {
    const val = root.val
    let result = true

    const dfs = (node) => {
        if (!node) return
        if (node.val !== val) {
            result = false
            return
        }

        if (node.left) dfs(node.left)
        if (node.right) dfs(node.right)
    }

    dfs(root)
    return result
}