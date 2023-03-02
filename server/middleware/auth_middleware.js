const jwt = require("jsonwebtoken");
const { read_file, write_file } = require("../fs/fs_api");

module.exports = async function (req, res, next) {
  let userData = await jwt.verify(req.headers.token, process.env.SEKRET_KEY);

  let reader = read_file("jwt.json");

  reader[0] = userData;

  console.log(reader);

  write_file("jwt.json", reader);

  next();
};
