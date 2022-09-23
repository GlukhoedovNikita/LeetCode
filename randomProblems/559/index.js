

const maxDepth = (root) => {
    if (!root) return 0

    let result = 0
    for (let i = 0; i < root.children.length; i++) {
        result = Math.max(result, maxDepth(root.children[i]))
    }
    

    return result + 1
}