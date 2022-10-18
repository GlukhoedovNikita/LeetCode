

const UndergroundSystem = function () {
    this.clients = {}
    this.stantions = {}
}

UndergroundSystem.prototype.checkIn = function (id, stationName, time) {
    this.clients[id] = {
        name: stationName,
        time
    }
}

UndergroundSystem.prototype.checkOut = function (id, stationName, time) {
    const route = this.clients[id].name + '->' + stationName

    if (!Object.hasOwn(this.stantions, route)) this.stantions[route] = []
    this.stantions[route].push(time - this.clients[id].time)
}

UndergroundSystem.prototype.getAverageTime = function (startStantion, endStantion) {
    const route = startStantion + '->' + endStantion

    return this.stantions[route].reduce((acc, v) => acc + v, 0) / this.stantions[route].length
}

const obj = new UndergroundSystem()

obj.checkIn(45, "Leyton", 3)
obj.checkOut(45, "W", 15)
obj.checkIn(1, "Leyton", 2)
obj.checkOut(1, "W", 15)
console.log(obj.getAverageTime('Leyton', 'W'))