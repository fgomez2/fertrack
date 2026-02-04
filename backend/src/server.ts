import express from "express"
import cors from "cors"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import 'dotenv/config'
import { ok } from "node:assert"

const app = express()

app.use(helmet())
app.use(cors({
    origin: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

app.get('/health', (_req, res) => {
    res.json({ ok: true })
})

const PORT = Number(process.env.PORT ?? 3000)
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})