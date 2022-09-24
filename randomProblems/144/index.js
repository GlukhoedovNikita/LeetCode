

const preorderTraversal = (root) => {
    const dfs = (node, result = []) => {
        if (!node) return result

        result.push(node.val)
        if (node.left) dfs(node.left, result)
        if (node.right) dfs(node.right, result)

        return result
    }

    return dfs(root)
}