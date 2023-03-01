const {Router} = require("express")
const Controller = require("../controller/product_controller")
const MiddleWare = require("../middleware/auth_middleware")

const Allrouter = Router()

Allrouter.get("/all_products", Controller.GET);

module.exports = Allrouter