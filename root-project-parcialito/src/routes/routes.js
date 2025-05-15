import { Router } from "express"
import { Controller } from "../controllers/controller.js"

const routes = Router()

// #1
routes.get("/json_file", Controller.obtener)

// #2
routes.get("/data_externa", Controller.readCsv)

export { routes }