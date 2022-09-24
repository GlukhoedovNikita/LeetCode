

const findTarget = (root, target) => {
    const arr = []
    const set = new Set()
    const dfs = (node) => {
        if (!node) return 

        arr.push(node.val)

        if (node.left) dfs(node.left)
        if (node.right) dfs(node.right)
    }

    dfs(root)
    for (val of arr) {
        if (set.has(target - val)) return true
        set.add(val)
    }

    return false
}