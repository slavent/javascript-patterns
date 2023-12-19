let count = 0
let instance = null

class Counter {
    constructor() {
        if (instance) {
            throw new Error("You can only create one instance.")
        }

        instance = this
    }

    getInstance () {
        return this
    }

    getCount() {
        return count
    }

    increment() {
        count++
    }

    decrement() {
        count--
    }
}

const counter1 = Object.freeze(new Counter())
