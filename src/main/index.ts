import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import env from "./config/env";

const app = express();
const server = createServer(app);
const socket = new Server(server);

server.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`);
});

export { socket };
