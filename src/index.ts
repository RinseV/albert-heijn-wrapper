import { AH } from './ah';

async function main() {
    const ah = new AH(true);
    const product = await ah.product().getFirstProductFromName('melk');
    console.log(product);
}

main();
