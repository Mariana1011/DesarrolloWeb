import express from "express";

const app = express();
const puerto = 3000;

app.listen(puerto, () => {
    console.log("El servidor se esta ejecutando.");
})

app.get("/", (req, res) =>{
    //implementar el codigo
    res.send("Hola")
})

app.get("/home", (req, res) =>{
    //implementar el codigo
    res.send("home a")
})

app.get("/home/g1", (req, res) =>{
    //implementar el codigo
    res.send("g1")
})