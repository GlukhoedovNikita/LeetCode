

const SubrectangleQueries = function(matrix) {
    this.rectangle = matrix
}

SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    if (row2 >= this.rectangle.length) row2 = this.rectangle.length - 1
    if (col2 >= this.rectangle[0].length) col2 = this.rectangle[0].length - 1

    for (let i = row1; i <= row2; i++) {
        for (let j = col1; j <= col2; j++) {
            this.rectangle[i][j] = newValue
        }
    }
}

SubrectangleQueries.prototype.getValue = function(row, col) {
    return this.rectangle[row][col]
}

const rectangle = new SubrectangleQueries([[3,9,4],[5,6,10]])
rectangle.updateSubrectangle(1, 1, 1, 1, 5)
console.log(rectangle.getValue(1, 0))
rectangle.updateSubrectangle(0, 0, 1, 0, 6)
console.log(rectangle.getValue(1, 0))
console.log(rectangle.getValue(0, 1))
