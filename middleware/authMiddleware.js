import JWT from "jsonwebtoken";
import User from "../models/user.model.js";

// protected routes token based authentication

export const requireSignIn = (req, res, next) => {

    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error)
    }
};


export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (user.role !== 'admin') {
            return res.status(401).json({ success: false, message: 'Admin resource. Access denied.' })
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: "Error In Admin Middleware", error });
    }
};