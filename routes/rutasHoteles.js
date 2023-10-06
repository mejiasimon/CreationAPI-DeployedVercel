import express from 'express'
import { controllerHabitacion } from '../controllers/ControladorHabitacion.js'
export const Routes=express.Router()
Routes.get("/obtener/habitaciones")
Routes.put("/actualizar/habitacion/:id")
Routes.delete("/eliminar/habitacion/:id")
Routes.post("/mandar/habitacion")
Routes.get("/obtener/habitacion/:id")
//reservas
Routes.get("/obtener/reservas")
Routes.put("/actualizar/reserva/:id")
Routes.delete("/eliminar/reserva/:id")
Routes.post("/hacer/reserva")
Routes.get("/obtener/reserva/:id")


