const { z } = require("zod");

const registerUserSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Valid email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

module.exports = { registerUserSchema };
