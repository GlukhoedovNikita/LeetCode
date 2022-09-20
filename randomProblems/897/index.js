

const increasingBST = (root) => {
    const arr = []
    const helper = (node) => {
        if (!node) return 

        arr.push(node.val)

        if (node.left) helper(node.left)
        if (node.right) helper(node.right)

        return
    }

    helper(root)
    arr.sort((a, b) => a - b)
 
    const result = new TreeNode(arr[0])
    let curr = result

    for (let i = 1; i < arr.length; i++) {
        curr.right = new TreeNode(arr[i])
        curr = curr.right
    }

    return result
}