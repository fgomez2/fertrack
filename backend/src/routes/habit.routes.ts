import { Router } from "express"
import {
    createHabit,
    getHabitsByUser,
    updateHabit,
    deleteHabit
} from '../controllers/habit.controller'

// Archivo de rutas para los hábitos
const router = Router()

// Crear un hábito
// POST http://localhost:3000/api/habits
router.post('/', createHabit)

// Obtener hábitos de un usuario (EL ID TEMPORALMENTE VIENE POR LA URL, PERO DEBERÍA VENIR DEL TOKEN CUANDO HAYA LOGIN)
// GET http://localhost:3000/api/habits/user/:userId
router.get('/user/:userId', getHabitsByUser)

// Actualizar un hábito
// PUT http://localhost:3000/api/habits/:id
router.put('/:id', updateHabit)

// Eliminar un hábito
// DELETE http://localhost:3000/api/habits/:id
router.delete('/:id', deleteHabit)

export default router