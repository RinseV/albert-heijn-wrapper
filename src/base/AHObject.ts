import { AH } from '../ah';

export class ahObject {
    constructor(
        protected readonly ah: AH,
        protected readonly authRequired: boolean
    ) {}
}
