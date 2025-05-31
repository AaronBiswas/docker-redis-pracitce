import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token)
      return res
        .status(401)
        .json({ success: false, message: "User not authenticated! Please login again" });

    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);

    req.id = verifiedUser.id;

    next();
  } catch (error) {
    console.log("Authentication error:", error);
    return res.status(500).json({ success: false, error: "Internal server error" });
  }
};