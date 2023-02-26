const {Router} = require("express")
const Controller = require("../controller/product_controller")

const router = Router()

router.get("/products", Controller.GET);
router.post("/products", Controller.POST);
router.put("/products/:id", Controller.PUT);
router.delete("/delete_product/:id", Controller.DELETE);

module.exports = router