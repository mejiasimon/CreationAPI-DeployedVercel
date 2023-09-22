const express = require("express");
const app = express();
const port = 3000;

app.get("/varios", (req, res) => {
  res.send("obtienes varios");
});
app.put("/actualizar", (req, res) => {
  res.send("actualizas");
});
app.delete("/eliminar", (req, res) => {
  res.send("eliminas");
});
app.post("/mandar", (req, res) => {
  res.send("mandas");
});
app.get("/vario", (req, res) => {
  res.send("obtienes uno");
});
 app.listen(port,()=>{
    console.log("server encendido")
 })