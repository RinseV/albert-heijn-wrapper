import { AH } from './ah';

async function main() {
    const ah = new AH(undefined, undefined, true);
    const product = await ah.product().getProductFromId(0); // Should return Zaanse Melk
    console.log(product);
}

main();
