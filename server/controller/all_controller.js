const { read_file } = require("../fs/fs_api");


const Allproducts = {
  GET: (req, res) => {
    let products = read_file("products.json")
    res.status(200).send(products);
  }
};

module.exports = Allproducts;
