import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));


const start = async() => {
  app.set("mongo_user")
  const connectiononDb = await mongoose.connect("mongodb+srv://sumamakhan800:yJJZfUsrYogARA0M@cluster0.huz6uqk.mongodb.net/")

  console.log(`MONGO Connected DB Host: ${connectiononDb.connection.host}`)

  app.listen(app.get("port"),()=>{
    console.log("LISTENING ON PORT 8000")
  });

}


start();