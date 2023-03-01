const {Router} = require("express")
const Controller = require("../controller/product_controller")
const MiddleWare = require("../middleware/auth_middleware")

const router = Router()

router.get("/products", MiddleWare, Controller.GET);
router.post("/products", MiddleWare, Controller.POST);
router.put("/products/:id", MiddleWare, Controller.PUT);
router.delete("/delete_product/:id", MiddleWare, Controller.DELETE);

module.exports = router