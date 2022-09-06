const preorder = (root, ans = []) => {
    if (!root) return ans
    ans.push(root.val)
    for (child of root.children) {
        preorder(child, ans)
    }
    return ans
}