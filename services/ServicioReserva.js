import { modeloReservas } from "../models/modeloReservas"
export class ServicioReserva {
  constructor() {}
  async buscar() {
let reservaHabitaciones=await modeloReservas.find()
return reservaHabitaciones

  }
  async buscarEspecifico(id) {
let reservaHabitacion=await modeloReservas.findById(id)
return reservaHabitacion

  }
  async modificar(id,data) {
return await modeloReservas.findByIdAndUpdate(id,data)


  }
  async registrar(data) {
let registrarReserva=new modeloReservas(data)
return await registrarReserva.save()

  }
  async eliminar(id) {
    let eliminarReserva=await modeloReservas.findByIdAndDelete(id)
    return(eliminarReserva)
  }
}
