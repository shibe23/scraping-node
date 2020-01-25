import { scraper } from './scraper';

async function main() {
  const result = await scraper.start();
  console.log(result);
  process.exit();
}
main();
