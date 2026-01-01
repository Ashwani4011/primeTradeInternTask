const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]; // Expect "Bearer <token>"
    if (!token) return res.status(401).json({ message: "No token provided" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId; // attach user ID to request
        next(); // token is valid, proceed
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
}

module.exports = verifyToken;
