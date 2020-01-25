import { apiAdapter } from './apiAdapter';
import { formatter } from './formatter';

import * as readline from 'readline';

interface ScraperTypes {
  getFromStdIn: () => Promise<string>;
  start: () => Promise<string>;
  getFromAPI: (url: string) => Promise<string>;
}

export const scraper: ScraperTypes = {
  getFromStdIn() {
    console.log('Enter URL');
    const rl = readline.createInterface(process.stdin, process.stdout);
    const line: Promise<string> = new Promise(res => rl.once('line', res));
    return line;
  },
  async start() {
    const url = await this.getFromStdIn();
    const result = await this.getFromAPI(url); // なぜawaitがいるのか
    const formatedResult = formatter.format(result);
    return formatedResult;
  },
  async getFromAPI(url: string) {
    const res = await apiAdapter.get(url);
    return res.data;
  },
};
