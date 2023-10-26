import { ServicioReserva } from "../services/ServicioReserva.js";
import moment from "moment/moment.js";
export class controllerReservas {
  constructor() {}
  async modificar (request, response) {
    let id = request.params.id;
    try {
          let data = new ServicioReserva();
          let datosUpdate=request.body
          let datos=await data.modificar(id,datosUpdate)
      response.status(200).json({
        estado: true,
        mensaje: "peticion exitosa reserva actualizada",
        datos:datosUpdate,
      });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada"+error,
        datos: null,
      });
    }
  }

  async buscar(request, response) {
    try {
      let data = new ServicioReserva();
      response.status(200).json({
        estado: true,
        mensaje: "peticion exitosa reservas buscadas",
        datos: await data.buscar(),
      });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada",
        datos: null,
      });
    }
  }
  async buscarEspecifico(request, response) {
    let id = request.params.id;
    try {
      let data = new ServicioReserva;
      response.status(200).json({
        estado: true,
        mensaje: "peticion exitosa reserva buscada",
        datos: await data.buscarEspecifico(id),
      });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada"+error,
        datos: null,
      });
    }
  }
  async registrar(request, response) {

    try {
      let data = new ServicioReserva();
      let datos = request.body;
      await data.registrar(datos)
      let fechaInicio=moment(datos.fechaInicio)
      let fechaFinal=moment(datos.fechaFinal)
      let diferencia=await fechaFinal.diff(await fechaInicio, 'days')

console.log(fechaInicio,fechaFinal)
      response.status(200).json({
        estado: true,
        mensaje: "peticion exitosa reserva creada",
        datos:datos,
        diasReserva:diferencia + " dias de diferencia"
      });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada"+error,
        datos: null,
      });
    }
  }
  async eliminar(request, response) {
    let id = request.params.id;
    try {
      let data = new ServicioReserva();
      await data.eliminar(id,data)
      response.status(200).json({
        estado: true,
        mensaje: "peticion exitosa reserva eliminada",
      });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada"+error,
        datos: null,
      });
    }
  }
  
}
