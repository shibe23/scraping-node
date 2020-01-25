"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
function get(url) {
    return axios_1.default.get('https://www.yahoo.co.jp/');
}
exports.get = get;
//# sourceMappingURL=api.js.map