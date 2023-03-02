const { read_file, write_file } = require("../fs/fs_api");
const uuid = require("uuid");
let userData = read_file("jwt.json");

const courses = {
  GET: (req, res) => {
    let { id } = userData[0];

    let courses = read_file("courses.json").filter(
      (user) => user.user_id === id
    );
    res.status(200).send(courses);
  },
  POST: async (req, res) => {
    try {
      let { id } = userData[0];

      let courses = read_file("courses.json");

      courses.push({
        id: uuid.v4(),
        user_id: id,
        ...req.body,
      });

      write_file("courses.json", courses);

      res.status(201).send({
        msg: "Created Product!",
      });
    } catch (error) {
      res.send(error.message);
    }
  },
  PUT: (req, res) => {
    let courses = read_file("courses.json");

    const { title, price, author } = req.body;

    courses.forEach((product) => {
      if (product.id === req.params.id) {
        product.title = title ? title : product.title;
        product.price = price ? price : product.price;
        product.author = author ? author : product.author;
      }
    });

    write_file("courses.json", courses);

    res.status(200).send({
      msg: "Updated product!",
    });
  },

  DELETE: (req, res) => {
    let courses = read_file("courses.json");

    courses.forEach((course, idx) => {
      if (course.id === req.params.id) {
        courses.splice(idx, 1);
      }
    });

    write_file("courses.json", courses);

    res.status(200).send({
      msg: "Deleted product!",
    });
  },
};

module.exports = courses;
