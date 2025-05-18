import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const Token = async (userId, res) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    secure:true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
};
