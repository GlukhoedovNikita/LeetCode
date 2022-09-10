// const isSymmetric = (root) => {
//     const isMirror = (node1, node2) => {
//         if (node1 === null && node2 === null) return true

//         if (node1.val === node2.val) return isMirror(node1.left, node2.right)

//         return false
//     }

//     return isMirror(root.left, root.right)
// }