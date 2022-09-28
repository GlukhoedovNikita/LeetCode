

const findContentChildren = (children, cookies) => {
    cookies.sort((a, b) => a - b)
    children.sort((a, b) => a - b)

    let index = 0, result = 0
    for (let i = 0; i < cookies.length; i++) {
        if (children[index] <= cookies[i]) {
            result++
            index++
        }

        if (index === children.length) break
    }

    return result
}

const children = [1,2]
const cookies = [1,2, 3]

console.log(findContentChildren(children, cookies))