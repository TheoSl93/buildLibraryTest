"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ResponseEnum_1 = require("@/enums/ResponseEnum");
class SoapLibraryClient {
    constructor(login, token) {
        this.login = login;
        this.token = token;
        this.url = 'mySoapUrl';
    }
    get(params) {
        return { data: { response: this.url + params, status: ResponseEnum_1.ResponseEnum.ok } };
    }
    post(params) {
        return { data: { response: this.url + params, status: ResponseEnum_1.ResponseEnum.ok } };
    }
}
exports.default = SoapLibraryClient;
//# sourceMappingURL=soapLibraryClient.js.map