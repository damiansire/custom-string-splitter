import { getSecuenceArray } from "./index";
import { describe, test, expect } from "@jest/globals";

const rawData = `export interface Task {
  title: string;
  description: string;
}`;

describe("getSecuenceArray", () => {
  test("should split the raw data into an array of strings", () => {
    const expectedOutput = [
      "export",
      "interface",
      "Task",
      "{",
      "title",
      ":",
      "string",
      ";",
      "description",
      ":",
      "string",
      ";",
      "}",
    ];
    const result = getSecuenceArray(rawData);
    expect(result).toEqual(expectedOutput);
  });
});
