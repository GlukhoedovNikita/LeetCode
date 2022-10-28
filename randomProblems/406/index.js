

const sortPeople = (people1, people2) => {
    if (people1[0] === people2[0]) {
        return people1[1] - people2[1]
    } else {
        return people2[0] - people1[0]
    }
}

const reconstructQueue = (array) => {
    const result = []
    array.sort(sortPeople)

    for (const people of array) {
        result.splice(people[1], 0, people)
    }

    return result
}

const array = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
console.log(reconstructQueue(array))