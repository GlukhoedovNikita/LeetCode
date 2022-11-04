
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const sortedArrayToBST = (arr) => {
    if (!arr.length) return null
    
    const mid = Math.floor(arr.length / 2)
    const result = new TreeNode(arr[mid])

    result.left = sortedArrayToBST(arr.slice(0, mid))
    result.right = sortedArrayToBST(arr.slice(mid + 1))
    return result
}

const arr = [0,1,2,3,4,5]

console.log(sortedArrayToBST(arr))