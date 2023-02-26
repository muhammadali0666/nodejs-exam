const { read_file, write_file } = require("../fs/fs_api");
const uuid = require("uuid");

const products = {
  GET: (req, res) => {
    let products = read_file("products.json");
    res.status(200).send(products);
  },
  POST: (req, res) => {
    try {
      console.log(req.headers);
      let products = read_file("products.json");

      products.push({
        id: uuid.v4(),
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
