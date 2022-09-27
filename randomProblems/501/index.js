

const findMode = (root) => {
    const dfs = (node, map = {}) => {
        if (!node) return map

        map[node.val] = 1 + (map[node.val] || 0)

        if (node.left) dfs(node.left, map)
        if (node.right) dfs(node.right, map)

        return map
    }

    const map = dfs(root)
    const result = []
    const max = Math.max(...Object.values(map))

    for ( [key, val] of Object.entries(map)) {
        if (val === max) result.push(+key)
    }

    return result
}