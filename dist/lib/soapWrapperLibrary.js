"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const soapLibraryClient_1 = __importDefault(require("@/soapLibraryClient"));
class SoapWrapperLibrary {
    constructor(login, token) {
        this.client = new soapLibraryClient_1.default(login, token);
    }
    fetchInfo(info) {
        return this.client.get(info);
    }
    postInfo(info) {
        return this.client.post(info);
    }
}
exports.default = SoapWrapperLibrary;
//# sourceMappingURL=soapWrapperLibrary.js.map