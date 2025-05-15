import express from 'express'
import morgan from "morgan"
import { config } from './src/config/config.js'
import { routes } from './src/routes/routes.js'

const app = express();

app.use(express.json())
app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
)
app.use("/api", routes)

app.listen(config.PORT, () => {
    const message = `🚀 SERVER is UP at http://${config.HOST}:${config.PORT}`
    console.log(message)
});