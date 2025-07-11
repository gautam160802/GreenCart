// middlewares/authUser.js
import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not Authorized - No token" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (tokenDecode.id) {
      req.userId = tokenDecode.id; // ✅ Put it on req, not req.body
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized - Invalid token" });
    }
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

export default authUser;
