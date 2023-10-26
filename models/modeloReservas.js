import mongoose, { Mongoose } from "mongoose";
const Schema=mongoose.Schema
const Reservas = new Schema({
  nombreCliente: { type: String, required: true },
  apellidosCliente: { type: String, required: true },
  telefono: { type: Number, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFinal: { type: Date, required: true },
  numeroPersonas: { type: Number, required: true },
});

export const modeloReservas = mongoose.model("reservas", Reservas);