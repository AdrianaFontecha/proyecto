const { verify } = require("jsonwebtoken");
const { secretOrKey } = require("../config/keys");

function verifyToken(req, res, next) {
  console.log("verifyToken middleware ejecutado");

  const token = req.get("Authorization");

  if (!token) {
    return res.status(403).json({
      success: false,
      message: "No se envió el token"
    });
  }

  const cleanToken = token.replace(/^Bearer\s+/i, "").replace(/^JWT\s+/i, "");

  verify(cleanToken, secretOrKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Token inválido",
        error: err
      });
    }

    req.user = decoded;
    next();
  });

}

module.exports = verifyToken;
