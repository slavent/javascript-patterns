class Observer {
    constructor() {
        this.observers = []
    }

    subscribe(func) {
        this.observers.push(func)
    }

    unsubscribe(func) {
        this.observers.filter(observer => observer !== func)
    }

    notify(data) {
        this.observers.forEach(observer => observer(data))
    }
}

const observer = new Observer()

const logMessage = data => {
    console.log(data)
}

const logError = data => {
    console.error(`Error: ${data}`)
}

observer.subscribe(logMessage)
observer.subscribe(logError)
observer.notify("Test")
