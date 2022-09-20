
const evaluateTree = (node) => {
    if (!node) return false

    if (node.val === 1 || node.val === 0) return !!node.val

    if (node.val === 2) return evaluateTree(node.left) || evaluateTree(node.right)
    if (node.val === 3) return evaluateTree(node.left) && evaluateTree(node.right)
}