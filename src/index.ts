// 1. ゲーム開始
// [P] カードを2枚引く、表示
// [D] カードを2枚引く、表示 2枚目は非表示
// [P] カードを引く、バースト判定
// [P] 次のカードを引くか選択
// [P] 引き終えるを選択
// [D] 手札が17以上になるまで引き続ける
// [D] 引き終える判定
// [SYS] 勝負

import { api } from './api';
import { Url } from 'url';
import { formatter } from './formatter';

import * as readline from 'readline';

interface EnviromentType {
  url: string;
}

const enviroment: EnviromentType = {
  url: 'https://hogehoge.example.com',
};

async function buildEnviroment() {
  const rl = readline.createInterface(process.stdin, process.stdout);
  const str = await new Promise(res => rl.once('line', res));

  return {
    url: str,
  };
}

const scraper = {
  start(env: any) {
    console.log('scraped!');
    this.getFromWeb(env.url);
    return [];
  },
  getFromWeb(url: string) {
    const data = api.get(url);
    return formatter.format(data);
  },
};

async function main() {
  const env = await buildEnviroment();
  scraper.start(env);
}
main();
