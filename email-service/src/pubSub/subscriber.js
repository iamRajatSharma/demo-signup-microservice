const client = require("../config/redis-database")
const { sendWelcomeEmail } = require("../mailer/sendMaiil")

const subscribeToUserCreated = async () => {
    client.subscribe("user_created", async (message) => {
        console.log(message)
        const result = JSON.parse(message)
        await sendWelcomeEmail(result)
    })
}

module.exports = subscribeToUserCreated