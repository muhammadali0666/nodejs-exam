const {Router} = require("express")
const Controller = require("../controller/courses_controller")
const MiddleWare = require("../middleware/auth_middleware")

const router = Router()

router.get("/courses", MiddleWare, Controller.GET);
router.post("/courses", MiddleWare, Controller.POST);
router.put("/courses/:id", MiddleWare, Controller.PUT);
router.delete("/delete_courses/:id", MiddleWare, Controller.DELETE);

module.exports = router