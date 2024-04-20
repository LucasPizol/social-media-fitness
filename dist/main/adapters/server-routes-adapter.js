"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    return (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const httpRequest = {
            body: req.body,
            headers: req.headers,
            params: req.params,
            query: req.query,
        };
        const httpResponse = yield controller.handle(httpRequest);
        res.status(httpResponse.statusCode);
        if (httpResponse.statusCode === 500) {
            res.send({ error: "SERVER ERROR: " + httpResponse.body.message });
        }
        else if (httpResponse.statusCode >= 400 &&
            httpResponse.statusCode < 500) {
            res.send({ error: httpResponse.body.message });
        }
        else {
            res.send(httpResponse.body);
        }
    });
};
exports.adaptRoute = adaptRoute;
