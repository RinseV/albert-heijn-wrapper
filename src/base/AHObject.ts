import { AH } from '../ah';

export class AHObject {
    constructor(protected readonly ah: AH) {}
}

export interface PaginationOptions {
    page?: number;
    size?: number;
}
