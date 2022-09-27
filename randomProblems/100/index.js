

const isSameTree = (tree1, tree2) => {
    const dfs = (node, result = { root: [], left: [], right: [] }) => {
        if (!node) return result

        result.root.push(node.val)
        if (node.left) {
            result.left.push(node.val)
            dfs(node.left, result)
        }
        if (node.right) {
            result.right.push(node.val)
            dfs(node.right, result)
        }
        
        return result
    }


    return JSON.stringify(dfs(tree1)) === JSON.stringify(dfs(tree2))
}