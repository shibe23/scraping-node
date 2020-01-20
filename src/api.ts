import * as https from 'https';
import { Url } from 'url';
import { FormatData } from './formatter';
export const api = {
  get(url: string) {
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
