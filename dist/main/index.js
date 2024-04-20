"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socket = void 0;
const express_1 = __importDefault(require("express"));
const node_http_1 = require("node:http");
const socket_io_1 = require("socket.io");
const env_1 = __importDefault(require("./config/env"));
const app = (0, express_1.default)();
const server = (0, node_http_1.createServer)(app);
const socket = new socket_io_1.Server(server);
exports.socket = socket;
server.listen(env_1.default.port, () => {
    console.log(`Server running on port ${env_1.default.port}`);
});
