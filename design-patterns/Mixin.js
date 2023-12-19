class Dog {
    constructor() {
        this.name = "Jack"
    }
}

const methods = {
    run: () => {
        console.log("run")
    },
    jump: () => {
        console.log("jump")
    }
}

const dog1 = Object.assign(Dog.prototype, methods)

dog1.run()
