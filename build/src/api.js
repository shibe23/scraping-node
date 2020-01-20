"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
exports.api = {
    get(url) {
        const req = https.request('https://www.yahoo.co.jp/', res => {
            res.on('data', chunk => {
                console.log(`BODY: ${chunk}`);
                return chunk;
            });
            res.on('end', () => {
                console.log('No more data in response.');
            });
        });
        req.on('error', e => {
            console.error(`problem with request: ${e.message}`);
        });
        req.end();
    },
};
//# sourceMappingURL=api.js.map