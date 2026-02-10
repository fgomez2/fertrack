import express from "express"
import cors from "cors"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import 'dotenv/config'
import { prisma } from "./db"

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

// --- RUTA DE PRUEBA BBDD ---
// Esta ruta la he utilizado para crear un usuario de prueba y devuelva todos
app.post('/api/test-user', async (req, res) => {
    try {
        // Crear usuario de prueba
        const newUser = await prisma.user.create({
            data: {
                email: `test_user_${Date.now()}@fertrack.com`,
                password: 'fertrack123',
            }
        })

        // Consulta usuarios totales
        const allUsers = await prisma.user.findMany()

        res.json({
            message: 'Usuario de prueba creado',
            newUser,
            totalUsers: allUsers.length
        })
    } catch (error) {
        console.error('Error creando usuario de prueba:', error)
        res.status(500).json({ error: 'Error creando usuario de prueba' })
    }
})
// --- FIN RUTA DE PRUEBA BBDD ---
const PORT = Number(process.env.PORT ?? 3000)
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})