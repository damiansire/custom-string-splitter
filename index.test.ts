import { customSplit } from "./index";
import { describe, test, expect } from "@jest/globals";

const rawData = `export interface Task {
  title: string;
  description: string;
}`;

describe("customSplit", () => {
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
    const result = customSplit(rawData);
    expect(result).toEqual(expectedOutput);
  });
});
