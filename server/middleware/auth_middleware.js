const jwt = require("jsonwebtoken")

module.exports = async function(req, res, next) {
  
  let userData = await jwt.verify(req.headers.token, process.env.SEKRET_KEY)

  req.user = userData

  next()
}