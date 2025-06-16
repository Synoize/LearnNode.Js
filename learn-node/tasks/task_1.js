// EventEmitter

const EventEmitter = require('events')

const emitter = new EventEmitter()

const eventCounts = {
    "user-login": 0,
    "user-purchase": 0,
    "profile-update": 0,
    "user-logout": 0
}

emitter.on("user-login", (user) => {
    eventCounts["user-login"] ++;
    console.log(`Total logins so far: ${eventCounts["user-login"]}`);
    console.log(`login successfully \nemail : ${user.email} \npassword: ${user.password}`);
})

emitter.on("user-purchase", (user) => {
    eventCounts['user-purchase']++
    console.log(`\nuser purchase products: ${user.products}`);
})

emitter.on("profile-update", (user) => {
    eventCounts['profile-update']++
    console.log(`\nuser profile updated \nname : ${user.name} \nemail : ${user.email} \nphone: ${user.phone}`);
})

emitter.on("user-logout", () => {
    eventCounts['user-logout']++
    console.log(`\nuser logout successfully`);
})


// call events here

emitter.emit(
    "user-login",
    {
        email: "varsha@gmail.com",
        password: "*********"
    },
)

emitter.emit(
    "user-purchase",
    {
        products: ["Laptop", "Mobile", "Tablet"]
    },
)

emitter.emit(
    "profile-update",
    {
        name: "Varsha",
        email: "varsha@gmail.com",
        phone: 8497982349
    },
)

emitter.emit(
    "user-logout",
)


console.log("Event Counts: ", eventCounts);
