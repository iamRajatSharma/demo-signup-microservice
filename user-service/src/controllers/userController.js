const User = require("../models/User");
const { publishUserCreated } = require("../pubSub/publisher");

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ message: "Email already exists" });

        const user = await User.create({ name, email, password });

        // Publish event
        await publishUserCreated(user);

        res.status(201).json({ message: "User registered", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
