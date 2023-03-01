const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Router = require("./routes/product_routes")
const AutRouter = require("./routes/auth_router")
const session = require("express-session")
// const AuthMiddle = require("./middleware/auth_middleware")

dotenv.config();
const { PORT } = process.env || 4000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(session({
  secret: "somethings",
  resave: false,
  saveUninitialized: false
}))

/////////////////// ROUTER
app.use(Router)

////////////////// Auth
app.use(AutRouter)

////////////////// MiddleWare



app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
