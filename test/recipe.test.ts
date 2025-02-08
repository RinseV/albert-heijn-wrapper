import { AH } from "../src";

describe("recipe", () => {
  const ah = new AH();

  describe("search", () => {
    it("searches for a recipe", async () => {
      const { result } = await ah.recipe.search("Pasta");
      expect(result.length).toBe(1);
    });
  });

  describe("get", () => {
    it("gets a recipe by id", async () => {
      const recipe = await ah.recipe.get(1200910);
      expect(recipe.id).toBe(1200910);
    });
  });
});
