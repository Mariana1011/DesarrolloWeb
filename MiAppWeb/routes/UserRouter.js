import express from "express"

const router = express.Router()

const usuario = {
    "nombre de usuario":"Maria Jose",
    correo: "mj@correo.com",
    edad: 15,
    notas: [
        3,
        4,
        4.8
    ],
    mascota:{
        nombre: "Calvin",
        raza: "Pitbull",
        edad: 7
    }
}

router.get("/", (req, res) =>{
    //implementar el codigo
    res.json(usuario.mascota.nombre)
})

router.get("/mascota", (req, res) =>{
    //implementar el codigo
    res.json(usuario.mascota)
})

router.get("/nombre", (req, res) =>{
    //implementar el codigo
    res.json(usuario.nombre)
})

export default router