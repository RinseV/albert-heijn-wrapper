import { AH } from '../ah';

export class AHObject {
    constructor(
        protected readonly ah: AH,
        protected readonly authRequired: boolean
    ) {}
}
