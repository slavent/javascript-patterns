class Dog {
    constructor() {
    }

    say() {
        console.log("Gaf")
    }
}

const dog1 = new Dog()

dog1.say()

Dog.prototype.jump = () => {
    console.log("jump")
}

dog1.jump()

class SuperDog extends Dog {
    fly () {
        console.log("fly")
    }
}

const superDog = new SuperDog()

superDog.fly()
console.log(superDog.__proto__.hasOwnProperty("say"))
console.log(superDog.__proto__.__proto__.hasOwnProperty("say"))
