import mongoose, { Mongoose } from "mongoose";
const Schema=mongoose.Schema
const Reservas = new Schema({
  nombreCliente: { type: String, required: true },
  apellidosCliente: { type: String, required: true },
  telefono: { type: number, required: true },
  fechaInicio: { type: date, required: true },
  fechaFinal: { type: date, required: true },
  numeroPersonas: { type: number, required: true },
});

export const modeloReservas = mongoose.model("reservas", Reservas);