const User = require("../models/User");
const { publishUserCreated } = require("../pubSub/publisher");
const { registerUserSchema } = require("../validators/userValidator")

exports.registerUser = async (req, res) => {
    try {
        const validateRequest = registerUserSchema.parse(req.body)
        const { name, email, password } = validateRequest;

        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ message: "Email already exists" });

        const user = await User.create({ name, email, password });

        // Publish event
        await publishUserCreated(user);

        return res.status(201).json({ message: "User registered", user });
    } catch (error) {
        if (error.name == "ZodError") {
            return res.status(500).json(error);
        }
        return res.status(500).json({ error: error.message });
    }
};
