var jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        res.json({
          isLoggedIn: false,
          message: "Failed To Authenticate ",
        });
        // res.redirect("/login");
      } else {
        req.user = {};
        req.user.id = decoded.id;
        req.user.username = decoded.username;
        next();
      }
    });
  } else {
    res.json({
      isLoggedIn: false,
      message: "Login First",
    });
    // res.redirect("/login");
  }
}

module.exports = verify;
