"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaBuilder = void 0;
const __1 = __importDefault(require(".."));
const users_table_1 = require("./tables/users-table");
const schemaBuilder = () => {
    (0, users_table_1.userTable)(__1.default);
};
exports.schemaBuilder = schemaBuilder;
(0, exports.schemaBuilder)();
