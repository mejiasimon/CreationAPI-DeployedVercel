import express from "express";
import { Routes } from "./routes/rutasHoteles.js";

export class Api {
  constructor() {
    this.app = express();
    this.processPetition()
    this.port = 3000;
  }
WakeServer() {
    this.app.listen(this.port, () => {
      console.log("on");
    });
}
processPetition(){
    this.app.use("/",Routes)
    this.app.use(express.json())
}
}
