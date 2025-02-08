import { AH } from "../src";

describe("store", () => {
  const ah = new AH();

  describe("search", () => {
    it("searches for a store", async () => {
      const { result } = await ah.store.search();
      expect(result?.length).toBe(1);
    });
  });
});
