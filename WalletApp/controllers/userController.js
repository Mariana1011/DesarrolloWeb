import userModel from "../models/userModel.js"

//CRUD
export function createUser(req, res) {

    const {nombre, edad, ciudad} = req.body.usuario

    const usuario = await userModel.create({
        nombre,
        edad,
        ciudad
    })

    res.status(201).json(usuario)
}

export function readUser(res) {
    res.sendStatus(200)
}

export function updateUser(res) {
    res.sendStatus(200)
}

export function deleteUser(res) {
    res.sendStatus(200)
}