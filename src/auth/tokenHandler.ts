import { AH } from '../ah';
import { addSeconds, isPast } from 'date-fns';

export class TokenHandler {
    private ahToken?: AHToken;
    private requestDate?: Date;
    private expireDate?: Date;
    Ready: Promise<any>;

    constructor(private readonly ah: AH) {
        this.Ready = new Promise((resolve, reject) => {
            this.getAnonymousMemberToken()
                .then(() => {
                    resolve(undefined);
                })
                .catch(reject);
        });
    }

    /**
     * Returns a token and (re-)creates one if needed
     */
    async getToken(): Promise<AHToken> {
        // If previous token expired or we don't have 1 yet, create (a new) one
        if (!this.ahToken || isPast(this.expireDate!)) {
            await this.getAnonymousMemberToken();
        }
        // Return the token
        return this.ahToken!;
    }

    /**
     * Gets an anonymous token that lasts for 2 hours (7199 seconds)
     */
    private async getAnonymousMemberToken() {
        this.requestDate = new Date();
        this.expireDate = addSeconds(this.requestDate, 7199);
        this.ahToken = await this.ah.post(
            'create-anonymous-member-token?client=appie-anonymous',
            undefined,
            undefined,
            undefined,
            true
        );
    }
}

interface AHToken {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
}
