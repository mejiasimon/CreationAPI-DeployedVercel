import express from 'express'

export const Routes=express.Router()
Routes.get("/obtener/habitaciones", (req, res) => {
  res.send("obtienes varias habitaciones");
});
Routes.put("/actualizar/habitacion", (req, res) => {
  res.send("actualizas la habitacion");
});
Routes.delete("/eliminar/habitacion", (req, res) => {
  res.send("eliminas habitacion");
});
Routes.post("/mandar/habitacion", (req, res) => {
  res.send("mandas habitacion");
});
Routes.get("/obtener/habitacion", (req, res) => {
  res.send("obtienes una habitacion");
});
//reservas
Routes.get("/obtener/reservas", (req, res) => {
  res.send("obtienes varias habitaciones");
});
Routes.put("/actualizar/reserva", (req, res) => {
  res.send("actualizas la habitacion");
});
Routes.delete("/eliminar/reserva", (req, res) => {
  res.send("eliminas habitacion");
});
Routes.post("/hacer/reserva", (req, res) => {
  res.send("mandas habitacion");
});
Routes.get("/obtener/reserva", (req, res) => {
  res.send("obtienes una reserva");
});


