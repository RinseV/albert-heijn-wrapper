import type { AH } from "../ah";
import type { AHToken } from "./types";

const CLIENT_ID = "appie-android";

export class AHAuth {
  private token: AHToken | null;
  private expireDate: Date | null;

  constructor(private readonly ah: AH) {
    this.token = null;
    this.expireDate = null;
  }

  /**
   * Get the current token or fetch a new one if it doesn't exist or is expired.
   */
  async getToken() {
    if (!this.token) {
      return await this.getAnonymousToken();
    }
    if (this.expireDate && this.expireDate < new Date()) {
      try {
        return await this.refreshToken(this.token.refresh_token);
      } catch (e) {
        this.token = null;
        return await this.getAnonymousToken();
      }
    }
    return this.token;
  }

  private async getAnonymousToken() {
    this.expireDate = new Date(new Date().getTime() + 7100 * 1000);
    const tokens = await this.ah.fetch<AHToken>(
      "/mobile-auth/v1/auth/token/anonymous",
      {
        method: "POST",
        body: JSON.stringify({
          clientId: CLIENT_ID,
        }),
      },
    );
    this.token = tokens;
    return tokens;
  }

  private async refreshToken(refreshToken: string) {
    return await this.ah.fetch<AHToken>("/mobile-auth/v1/auth/token/refresh", {
      method: "POST",
      body: JSON.stringify({
        clientId: CLIENT_ID,
        refreshToken,
      }),
    });
  }
}
