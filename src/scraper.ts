import { apiAdapter } from './apiAdapter';
import { formatter } from './formatter';

import * as readline from 'readline';

interface ScraperTypes {
  getURLFromStdIn: () => Promise<string>;
  getTextFromAPI: (url: string) => Promise<string>;
  start: () => Promise<string>;
}

export const scraper: ScraperTypes = {
  getURLFromStdIn() {
    console.log('Enter URL');
    const rl = readline.createInterface(process.stdin, process.stdout);
    const line: Promise<string> = new Promise(res => rl.once('line', res));
    return line;
  },
  async getTextFromAPI(url: string) {
    const res = await apiAdapter.get(url);
    return res.data;
  },
  async start() {
    const url = await this.getURLFromStdIn();
    const result = await this.getTextFromAPI(url);
    const formatedResult = formatter.format(result);
    return formatedResult;
  },
};
