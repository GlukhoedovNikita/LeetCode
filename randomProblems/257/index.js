

const binaryTreePaths = (root) => {
    const result = []
    const dfs = (node, str = '') => {
        if (!node) return

        str += `${node.val}->`
        if (!node.left && !node.right) {
            result.push(str.slice(0, str.length - 1))
            str = ''
        }


        if (node.left) dfs(node.left, str)
        if (node.right) dfs(node.right, str)

        return str
    }

    dfs(root)

    return result
}