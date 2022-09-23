

const sumRootToLeaf = (root) => {
    let result = 0
    const dfs = (node, val = '') => {
        if (!node.left && !node.right) {
            result += Number.parseInt(val + node.val, 2)
            return
        }

        if (node.left) dfs(node.left, val + node.val)
        if (node.right) dfs(node.right, val + node.val)
    }

    dfs(root)

    return result
}