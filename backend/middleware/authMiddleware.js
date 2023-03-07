const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers['authorization'] &&
    req.headers['authorization'].startsWith("Bearer")
  ) {
    try {
      token = req.headers['authorization'].split(" ")[1];

      //verify
      const decoded = jwt.verify(token, process.env.JWT_SECERT)
      req.user = await User.findById(decoded.id).select("-password")

      next()
    } catch (error) {
        console.log(error)
        res.status(401).json("UnAuthorized")
    }
  }

  if (!token) {
    res.status(401).json("UnAuthorized, No Token")
  }
});

module.exports = {
    protect
}