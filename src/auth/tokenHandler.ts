import { AH } from '../ah';
import { addSeconds, isPast } from 'date-fns';

export class TokenHandler {
    private ahToken?: AHToken;
    private requestDate?: Date;
    private expireDate?: Date;
    Ready: Promise<undefined>;

    constructor(private readonly ah: AH) {
        this.Ready = new Promise((resolve, reject) => {
            this.getToken()
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
        if (!this.ahToken) {
            this.ahToken = await this.getAnonymousMemberToken();
        }
        if (this.ahToken?.refresh_token && this.expireDate && isPast(this.expireDate)) {
            // Token expired, refresh it
            await this.refreshToken();
        }
        // Return the token
        return this.ahToken;
    }

    /**
     * Gets an anonymous token that lasts for 2 hours (7199 seconds)
     */
    private async getAnonymousMemberToken(): Promise<AHToken> {
        this.requestDate = new Date();
        this.expireDate = addSeconds(this.requestDate, 7199);
        return await this.ah.post(
            'mobile-auth/v1/auth/token/anonymous',
            {
                clientId: 'appie'
            },
            undefined,
            true
        );
    }

    /**
     * Refreshes access token using refresh token
     */
    private async refreshToken() {
        if (!this.ahToken) {
            throw new Error('No token to refresh');
        }
        this.requestDate = new Date();
        this.expireDate = addSeconds(this.requestDate, 7199);
        this.ahToken = await this.ah.post('mobile-auth/v1/auth/token/refresh', {
            clientId: 'appie',
            refreshToken: this.ahToken?.refresh_token
        });
    }
}

interface AHToken {
    access_token: string;
    expires_in: number;
    refresh_token: string;
}
