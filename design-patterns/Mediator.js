class ChatRoom {
    logMessage(user, message) {
        const sender = user.getName()

        console.log(`${new Date().toLocaleString()} [${sender}]: ${message}`)
    }
}

class User {
    constructor(name, chatroom) {
        this.name = name
        this.chatroom = chatroom
    }

    getName() {
        return this.name
    }

    send(message) {
        this.chatroom.logMessage(this, message)
    }
}

const chatRoom = new ChatRoom()
const user1 = new User("Jack", chatRoom)
const user2 = new User("Jay", chatRoom)

user1.send("Hi!")
user2.send("Hello!")
