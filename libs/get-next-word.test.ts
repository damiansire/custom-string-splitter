import { describe, test, expect } from "@jest/globals";
import { typescriptTestCases } from "../tests/get-next-word.testdata";
import { getNextWord } from "./get-next-word";

describe("getNextWord -> Typescript test", () => {
  describe("get the next word", () => {
    const options = {
      breakCharacters: ["{", "}", ";", ":", ",", "=", "+", "(", ")", ".", " "],
      breakWords: [],
      ignoreCharacters: ["\n", "\t", " "],
      ignoreWords: [],
    };

    const rawData = typescriptTestCases.rawData;

    typescriptTestCases.cases.forEach(({ index, word, endIndex }) => {
      test(`should get '${word}' from index ${index} to ${endIndex}`, () => {
        const result = getNextWord(rawData, options, index);
        expect({ endWordIndex: endIndex, word: word }).toEqual(result);
      });
    });
  });
});
