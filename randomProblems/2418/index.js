

const sortPeople = (names, heights) => {
    return Array(names.length)
    .fill(0)
    .map((_, i) => [names[i], heights[i]])
    .sort((val1, val2) => val2[1] - val1[1])
    .map(([names, _]) => names)
}

const names = ["Mary","John","Emma"]
const heights = [180,165,170]

console.log(sortPeople(names, heights))