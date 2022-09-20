

const postorder = (root) => {
    const stack = [root]
    const result = []


    const bfs = () => {
        if (!stack.length) return
        const node = stack.pop()
        result.push(node.val)

        if (node.children) {
            if (Array.isArray(node.children)) {
                for (child of node.children) {
                    stack.push(child)
                }
            } else {
                stack.push(node.children)
            }
        }

        bfs()
    }

    bfs()
    return result.reverse()
}