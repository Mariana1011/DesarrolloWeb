import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/userRouter.js";

const app = express();

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("El servidor se está ejecutando correctamente.");
})

mongoose.connect("mongodb+srv://Usuario:Contraseña@clusterdwapp.alkri2l.mongodb.net/DW-app?retryWrites=true&w=majority", (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("La base de datos se encuentra conectada");
    }
})

//Middleware
app.use(express.json())
app.use("/user", userRouter)
