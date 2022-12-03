import Avion from "./Avion.js";
import Servicio from "./Servicio.js";
import ServicioAereo from "./ServicioAereo.js";

const servicioTerrestre = new Servicio();
const servicioTerrestre2 = new Servicio();
const servicioAereo = new ServicioAereo();
const servicioAereo2 = new ServicioAereo();

function enviarPaquete(servicio, lugar){

    const transporte = servicio.obtenerTransporte();
    transporte.transportar(lugar);
}

enviarPaquete(servicioAereo, "Bucaramanga")
enviarPaquete(servicioAereo, "Riohacha")
enviarPaquete(servicioAereo2, "Bogotá")
enviarPaquete(servicioTerrestre, "Cali")
enviarPaquete(servicioTerrestre, "Otra Ciudad")
enviarPaquete(servicioTerrestre2, "Pereira")