"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.knexConfig = void 0;
const env_1 = __importDefault(require("@/main/config/env"));
exports.knexConfig = {
    client: "pg",
    connection: {
        host: env_1.default.db.host,
        port: env_1.default.db.port,
        user: env_1.default.db.username,
        password: env_1.default.db.password,
        database: env_1.default.db.name,
    },
};
