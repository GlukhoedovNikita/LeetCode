

// const minDiffInBST = (root) => {
//     let prev = null
//     let result = Infinity

//     const dfs = (node) => {
//         if (!node) return 

//         dfs(node.left)
//         if (prev) result = Math.min(result, node.val - prev)
//         prev = node.val
//         dfs(node.right)
//     }

//     dfs(root)
//     return result
// }

const minDiffInBST = (root) => {
    const array = []

    const dfs = (node) => {
        if (!node) return
            
        dfs(node.left) 
        array.push(node.val)
        dfs(node.right) 
    }

    dfs(root)

    let result = Infinity
    for (let i = 0; i < array.length - 1; i++) result = Math.min(result, array[i + 1] - array[i])

    return result
}