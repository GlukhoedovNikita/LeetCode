

const destCity = (paths) => {
    const from = new Set(paths.map((v) => v[0]))
    const to = new Set(paths.map((v) => v[1]))

    for (city of to.values()) {
        if (!from.has(city)) return city
    }
}

const paths = [["B","C"],["D","B"],["C","A"]]
console.log(destCity(paths))