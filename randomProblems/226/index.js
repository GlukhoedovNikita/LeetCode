

const invertTree = (root) => {
    const helper = (node) => {
        if (!node) return node

        const temp = node.left
        node.left = node.right
        node.right = temp

        helper(node.left)
        helper(node.right)

        return node
    }

    return helper(root)
}