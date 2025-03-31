import { customSplit } from "./index";
import { describe, test, expect } from "@jest/globals";
import { testCases } from "./tests/customSplit.testdata.ts";

describe("customSplit", () => {
  describe("should split code string into tokens", () => {
    testCases.forEach(({ input, expectedOutput }) => {
      test(`should split '${input}' into tokens correctly`, () => {
        const result = customSplit(input);
        expect(result).toEqual(expectedOutput);
      });
    });
  });
});
