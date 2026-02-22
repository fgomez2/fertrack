import { prisma } from "../db"
import { Request, Response } from "express"

// Crear un hábito nuevo
export const createHabit = async (req: Request, res: Response): Promise<void> => {
    try {
        // Lo que va a venir del frontend
        const { name, userId, description, color, frequency, startDate} = req.body

        // validación: solo obligatorio
        if (!name || !userId) {
            res.status(400).json({ error: 'Faltan datos obligatorios' })
            return
        }

        // Enviar datos a la base de datos
        const newHabit = await prisma.habit.create({
            data: {
                name,
                userId,
                description,
                color,
                frequency,
                startDate: startDate ? new Date(startDate) : undefined
            }
        })

        // Responder al frontend
        res.status(201).json(newHabit)
    } catch (error) {
        console.error('Error al crear hábito:', error)
        res.status(500).json({ error: "Error interno al intentar crear un hábito" })
    }
}

// Obtener todos los hábitos de un usuario
export const getHabitsByUser = async (req: Request, res: Response): Promise<void> => {
    try {
        // Sacamos el userId de la URL (ARREGLAR ESTO CUANDO HAYA LOGIN DEDICADO)
        const { userId } = req.params as { userId: string }

        const habits = await prisma.habit.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' } // del más nuevo al más viejo
        })

        res.status(200).json(habits)
    } catch (error) {
        console.error('Error al obtener hábitos:', error)
        res.status(500).json({ error: "Error interno al intentar obtener los hábitos" })
    }
}

// Actualizar un hábito existente
export const updateHabit = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params as { id: string }
        const { name, description, color, frequency, startDate, archived } = req.body

        // Verificar que el hábito existe
        const habit = await prisma.habit.findUnique({ where: { id } })
        if (!habit) {
            res.status(404).json({ error: 'Hábito no encontrado' })
            return
        }

        const updatedHabit = await prisma.habit.update({
            where: { id },
            data: {
                ...(name !== undefined && { name }),
                ...(description !== undefined && { description }),
                ...(color !== undefined && { color }),
                ...(frequency !== undefined && { frequency }),
                ...(startDate !== undefined && { startDate: new Date(startDate) }),
                ...(archived !== undefined && { archived }),
            }
        })

        res.status(200).json(updatedHabit)
    } catch (error) {
        console.error('Error al actualizar hábito:', error)
        res.status(500).json({ error: 'Error interno al intentar actualizar el hábito' })
    }
}

// Eliminar un hábito
export const deleteHabit = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params as { id: string }

        // Verificar que el hábito existe
        const habit = await prisma.habit.findUnique({ where: { id } })
        if (!habit) {
            res.status(404).json({ error: 'Hábito no encontrado' })
            return
        }

        await prisma.habit.delete({ where: { id } })

        res.status(200).json({ message: 'Hábito eliminado correctamente' })
    } catch (error) {
        console.error('Error al eliminar hábito:', error)
        res.status(500).json({ error: 'Error interno al intentar eliminar el hábito' })
    }
}