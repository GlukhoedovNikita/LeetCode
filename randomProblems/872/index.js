

const leafSimilar = (root1, root2) => {
    const dfs = (node, result = []) => {
        if (!node) return result

        if (!node.left && !node.right) result.push(node.val)

        if (node.left) dfs(node.left, result)
        if (node.right) dfs(node.right, result)

        return result
    }

    return JSON.stringify(dfs(root1)) === JSON.stringify(dfs(root2))
}