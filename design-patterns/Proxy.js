const person = {
    name: "Ivan"
}

const handlers = {
    get: (target, prop) => {
        if (prop in target) {
            return target[prop]
        }

        return 0
    }
}

const proxyPerson = new Proxy(person, handlers)

console.log(proxyPerson.test)
console.log(proxyPerson.name)
