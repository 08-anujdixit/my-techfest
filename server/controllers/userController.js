import jwt from "jsonwebtoken";
import Users from '../models/Users.js';

// Profile Controller (protected route)
export const getUserData = async (req, res) => {
  try {
    
    // req.user comes from middleware (decoded token)
    const user = await Users.findById(req.user.id).select("-password"); // exclude password
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};