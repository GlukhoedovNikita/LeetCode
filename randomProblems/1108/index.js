
const defangIPaddr = (address) => {
    return address.split('.').join('[.]')
}

const address = '255.100.50.0'
console.log(defangIPaddr(address))