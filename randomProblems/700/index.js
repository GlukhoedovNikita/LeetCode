

// const searchBST = (root, val) => {
//     let result = null
//     const dfs = (node) => {
//         if (!node) return
//         if (node.val === val) {
//             result = node
//             return 
//         }

//         if (node.left) dfs(node.left)
//         if (node.right) dfs(node.right)
//     }

//     dfs(root)

//     return result
// }

const searchBST = (node, val) => {
    if (!node) return null
    if (node.val === val) return node
    if (node.val > val) return searchBST(node.left, val)
    if (node.val < val) return searchBST(node.right, val)
}