import Auth from "../models/Auth.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await Auth.findOne({ email });

        if (existingUser) {
            const err = new Error("Email already exists");
            err.status = 400;
            return next(err);
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await Auth.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });
    } catch (err) {
        next(err);
    }
};

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await Auth.findOne({ email });

        if (!user) {
            const err = new Error("Invalid credentials");
            err.status = 401;
            return next(err);
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            const err = new Error("Invalid credentials");
            err.status = 401;
            return next(err);
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message: "User logged in successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        });
    } catch (err) {
        next(err);
    }
};