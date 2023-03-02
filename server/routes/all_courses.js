const {Router} = require("express")
const Controller = require("../controller/all_controller")

const Allrouter = Router()

Allrouter.get("/all_courses", Controller.GET);

module.exports = Allrouter