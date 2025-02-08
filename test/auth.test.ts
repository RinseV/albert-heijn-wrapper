import { AH } from "../src";
import { AHAuth } from "../src/auth/auth";

describe("auth", () => {
  const ah = new AH();
  const auth = new AHAuth(ah);

  describe("getToken", () => {
    describe("when there is no token", () => {
      it("retrieves a new token", async () => {
        const token = await auth.getToken();
        expect(token).toBeDefined();
        expect(token.access_token).toBe("access_token");
      });
    });

    describe("when there is a token but it is expired", () => {
      it("refreshes the token", async () => {
        // @ts-ignore
        auth.expireDate = new Date(0);
        const token = await auth.getToken();
        expect(token).toBeDefined();
        expect(token.access_token).toBe("refreshed_access_token");
      });
    });

    describe("when there is a token and it is not expired", () => {
      it("returns the token", async () => {
        // @ts-ignore
        auth.token = {
          access_token: "valid_access_token",
          refresh_token: "valid_refresh_token",
          expires_in: 7200,
        };
        // @ts-ignore
        auth.expireDate = new Date(9999999999999);
        const token = await auth.getToken();
        expect(token).toBeDefined();
        expect(token.access_token).toBe("valid_access_token");
      });
    });
  });
});
