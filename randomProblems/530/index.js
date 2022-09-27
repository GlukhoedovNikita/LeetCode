

const getMinimumDifference = (root) => {
    const array = []

    const dfs = (node) => {
        if (!node) return 

        array.push(node.val)
        if (node.left) dfs(node.left)
        if (node.right) dfs(node.right)
    }
    
    dfs(root)
    array.sort((a, b) => a - b)

    let result = Infinity
    for (let i = 0; i < array.length - 1; i++) result = Math.min(array[i + 1] - array[i], result)

    return result
}