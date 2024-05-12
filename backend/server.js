const { log } = require("console");
const express= require("express");
const path = require("path");
const http = require("http");
const {Server}= require("socket.io")


const PORT =3000;
const app = express();
app.use(express.static(path.resolve("./public")));
const server = http.createServer(app);
const io = new Server(server);

io.on("connection",(socket)=>{
    console.log("a new user connected ",socket.id);
 socket.on("user-message",(message)=>{
    io.emit("message",message);
 });
})
app.get("/",(req,res)=>{
    
    res.render("/public/index.html");
})


server.listen(PORT,()=>{

    console.log(`app is running on ${PORT}`);
})
