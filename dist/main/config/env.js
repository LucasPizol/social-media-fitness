"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const prc = process.env;
exports.default = {
    port: prc.PORT,
    db: {
        username: prc.DB_USERNAME,
        port: prc.DB_PORT,
        host: prc.DB_HOST,
        password: prc.DB_PASSWORD,
        name: prc.DB_DATABASE_NAME,
    },
};
