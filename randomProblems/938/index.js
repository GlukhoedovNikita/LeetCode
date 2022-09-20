

const rangeSumBST = (root, low, high) => {
    let res = 0

    const helper = (node = 0) => {
        if (!node) return 

        if (node.val >= low && node.val <= high) res += node.val

        if (node.left) helper(node.left)
        if (node.right) helper(node.right)

        return 
    }

    helper(root)
    return res
}