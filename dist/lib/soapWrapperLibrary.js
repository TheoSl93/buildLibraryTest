"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var soapLibraryClient_1 = tslib_1.__importDefault(require("src/soapLibraryClient"));
var SoapWrapperLibrary = (function () {
    function SoapWrapperLibrary(login, token) {
        this.client = new soapLibraryClient_1.default(login, token);
    }
    SoapWrapperLibrary.prototype.fetchInfo = function (info) {
        return this.client.get(info);
    };
    SoapWrapperLibrary.prototype.postInfo = function (info) {
        return this.client.post(info);
    };
    return SoapWrapperLibrary;
}());
//# sourceMappingURL=soapWrapperLibrary.js.map