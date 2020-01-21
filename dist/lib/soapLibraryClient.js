"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SoapLibraryClient = (function () {
    function SoapLibraryClient(login, token) {
        this.login = login;
        this.token = token;
        this.url = 'mySoapUrl';
    }
    SoapLibraryClient.prototype.get = function (params) {
        return { data: { response: this.url + params } };
    };
    SoapLibraryClient.prototype.post = function (params) {
        return { data: { response: this.url + params } };
    };
    return SoapLibraryClient;
}());
exports.default = SoapLibraryClient;
//# sourceMappingURL=soapLibraryClient.js.map