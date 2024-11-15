import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "localhost:3000",
    methods: ["Get", "POST"],
  },
});

app.use(cors());

io.on("connection", (socket) => {
  console.log("a user connected");

  // Handle chat messages
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  // Handle video signaling
  socket.on("video-offer", (offer: RTCSessionDescriptionInit) => {
    socket.broadcast.emit("video-offer", offer);
  });

  socket.on("video-answer", (answer: RTCSessionDescriptionInit) => {
    socket.broadcast.emit("video-answer", answer);
  });

  socket.on("ice-candidate", (candidate: RTCIceCandidate) => {
    socket.broadcast.emit("ice-candidate", candidate);
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

require("dotenv").config();
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
