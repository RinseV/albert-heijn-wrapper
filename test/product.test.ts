import { AH } from "../src";

describe("product", () => {
  const ah = new AH();

  describe("search", () => {
    it("searches for a product", async () => {
      const { products, totalFound } = await ah.product.search("Melk");
      expect(products.length).toBe(1);
      expect(totalFound).toBe(1);
    });
  });

  describe("get", () => {
    it("gets a product by id", async () => {
      const product = await ah.product.get(208278);
      expect(product.id).toBe(208278);
    });
  });
});
