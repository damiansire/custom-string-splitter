import { customSplit } from "./index";
import { describe, test, expect } from "@jest/globals";
import { testCases } from "./tests/customSplit.testdata";

describe("customSplit", () => {
  describe("should split code string into tokens", () => {
    const specialCharacters = ["{", "}", ";", ":", ",", "=", "+", "(", ")"];
    testCases.forEach(({ input, expectedOutput }) => {
      test(`should split '${input}' into tokens correctly`, () => {
        const result = customSplit(input, specialCharacters);
        expect(result).toEqual(expectedOutput);
      });
    });
  });
});
