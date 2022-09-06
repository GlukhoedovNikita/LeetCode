
const firstBadVersion = (n) => {
    let start = 1
    let end = n
    while (start <= end) {
        const medium = Math.floor((start + end) / 2)
        if (isBadVersion(medium)) end = medium - 1
        else start = medium + 1
    }
    return start
}