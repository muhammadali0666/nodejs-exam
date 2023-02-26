const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const uuid = require("uuid");
const { read_file, write_file } = require("./fs/fs_api");
const Router = require("./routes/product_routes")

dotenv.config();
const { PORT } = process.env || 4000;

const app = express();
app.use(cors());
app.use(express.json());

/////////////////// ROUTER
app.use(Router)


app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
