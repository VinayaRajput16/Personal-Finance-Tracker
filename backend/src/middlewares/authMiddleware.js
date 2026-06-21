import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        const err = new Error("Unauthorized");
        err.status = 401;
        return next(err);
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET_KEY
        );

        req.userId = decoded.userId;

        next();
    } catch (err) {
        const error = new Error("Invalid or expired token");
        error.status = 401;
        return next(error);
    }
};

export default authMiddleware;