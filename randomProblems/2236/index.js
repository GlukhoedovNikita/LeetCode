

const checkTree = (node) => {
    if (!node) return false

    return node.val === node.left.val + node.right.val
}