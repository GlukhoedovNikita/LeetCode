
const isCousins = (root, x, y) => {
    const queue = [root]
    let array1 = [], array2 = [], level = 0

    while (queue.length) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            const current = queue.shift()
            if (current.left) {
                if (current.left.val === x) array1 = [current.val, level]
                if (current.left.val === y) array2 = [current.val, level]

                queue.push(current.left)
            }
            if (current.right) {
                if (current.right.val === x) array1 = [current.val, level]
                if (current.right.val === y) array2 = [current.val, level]
                
                queue.push(current.right)
            }
        }
        level++
    }

    console.log(array1, array2)
    return array1[1] === array2[1] && array1[0] !== array2[0]
}