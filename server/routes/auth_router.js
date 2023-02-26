const {Router} = require("express")
const AuthControl = require("../controller/auth_controller")

const router = Router()

router.post("/register", AuthControl.REGISTER)
router.post("/login", AuthControl.LOGIN)


module.exports = router