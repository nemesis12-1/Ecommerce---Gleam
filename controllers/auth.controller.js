import User from "../models/user.model.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";


export const register = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;
        if (!name || !email || !password || !phone || !address) {
            return res
                .status(400)
                .json({ success: false, message: "Please fill all the fields" });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res
                .status(200)
                .json({ success: false, message: "User already exists , Please Login" });
        }

        const hashedPassword = await hashPassword(password);
        const newUser = await new User({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
        }).save();

        res.status(201).json({ success: true, message: "User created successfully", user: newUser });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error While Registering", error });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid Email Or Password" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .json({ success: false, message: "User Not Found" });
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid Password" });
        }

        //token creation
        const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.status(200).json({
            success: true,
            message: "User Logged In Successfully",
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            },
        });



    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error While Log In", error });
    }
};