"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverConfig = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const serverConfig = (app) => {
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    return app;
};
exports.serverConfig = serverConfig;
