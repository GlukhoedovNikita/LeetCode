
const minMovesToSeat = (seats, students) => {
    seats.sort((a, b) => a - b)
    students.sort((a, b) => a - b)

    return seats.reduce((acc, v, i) => {
        return acc + Math.abs(students[i] - v)
    }, 0)
}

const seats = []
const students = []
console.log(minMovesToSeat(seats, students))