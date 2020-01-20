import * as https from 'https';

export interface FormatData {
  data: string;
}

export const formatter = {
  format(data: any) {
    const req = https.request('https://www.yahoo.co.jp/', res => {
      res.on('data', chunk => {
        console.log(`BODY: ${chunk}`);
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
