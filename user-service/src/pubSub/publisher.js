const client = require("../config/redis-database");

const publishUserCreated = async (user) => {
    const payload = JSON.stringify({ email: user.email, name: user.name });
    await client.publish("user_created", payload);
};

module.exports = { publishUserCreated };