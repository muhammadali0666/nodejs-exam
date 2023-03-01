const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const { read_file, write_file } = require("../fs/fs_api");
const jwt = require("jsonwebtoken");

const Auth = {
  REGISTER: async (req, res) => {
    const { username, email, password } = req.body;

    let users = read_file("users.json");

    let founded = users.find((user) => user.email === email);

    if (founded) {
      return res.send({
        msg: "User already exist",
      });
    }

    let hashPsw = await bcrypt.hash(password, 12);
    console.log(hashPsw);

    users.push({
      id: uuid.v4(),
      username,
      email,
      password: hashPsw,
    });

    write_file("users.json", users);

    res.send({
      msg: "Registration",
    });
  },

  LOGIN: async (req, res) => {
    const { email, password } = req.body;
    let founded = read_file("users.json").find((user) => user.email === email);

    if (!founded) {
      res.status(404).send({
        msg: "User not found",
      });
    }

    let psw = await bcrypt.compare(password, founded.password);

    console.log(psw);
    if (psw) {
      let token = jwt.sign(
        { id: founded.id, email: founded.email },
        process.env.SEKRET_KEY,
        {
          expiresIn: "5h",
        }
      );

      return res.status(200).send({
        msg: "Success",
        token,
      });
    }

    res.send("OK");
  },
};

module.exports = Auth;
