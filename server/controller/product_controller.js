const { read_file, write_file } = require("../fs/fs_api");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
let userData = read_file("jwt.json")

const products = {
  GET: (req, res) => {

    let {id} = userData[0]

    // const {id} = req.user
    let products = read_file("products.json").filter(user => user.user_id === id)
    res.status(200).send(products);
  },
  POST: async (req, res) => {
    try {
      let {id} = userData[0]
      // let {id} = req.user

        let products = read_file("products.json");

        products.push({
          id: uuid.v4(),
          user_id: id,
          ...req.body,
        });

        write_file("products.json", products);

         res.status(201).send({
          msg: "Created Product!",
        });

    } catch (error) {
      res.send(error.message);
    }
  },
  PUT: (req, res) => {
    let products = read_file("products.json");

    const { title, price, author } = req.body;

    products.forEach((product) => {
      if (product.id === req.params.id) {
        product.title = title ? title : product.title;
        product.price = price ? price : product.price;
        product.author = author ? author : product.author;
      }
    });

    write_file("products.json", products);

    res.status(200).send({
      msg: "Updated product!",
    });
  },

  DELETE: (req, res) => {
    let products = read_file("products.json");

    const { title, price, author } = req.body;

    products.forEach((course, idx) => {
      if (course.id === req.params.id) {
        products.splice(idx, 2);
      }
    });

    write_file("products.json", products);

    res.status(200).send({
      msg: "Deleted product!",
    });
  },
};

module.exports = products;
