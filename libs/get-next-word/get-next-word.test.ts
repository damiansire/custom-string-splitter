import { describe, test, expect } from "@jest/globals";
import { typescriptTestCases } from "./get-next-word.testdata";
import { getNextWord } from "./get-next-word";

describe("getNextWord -> Typescript test", () => {
  typescriptTestCases.forEach((testCase) => {
    describe(`${testCase.description}`, () => {
      const options = {
        breakCharacters: ["{", "}", ";", ":", ",", "=", "+", "(", ")", ".", " "],
        breakWords: [],
        ignoreCharacters: ["\n", "\t", " "],
        ignoreWords: [],
        customRules: [
          {
            open: '"',
            closed: ['"'],
          },
        ],
      };

      const rawData = testCase.rawData;

      testCase.cases.forEach(({ index, word, endIndex }) => {
        test(`should get '${word}' from index ${index} to ${endIndex}`, () => {
          const result = getNextWord(rawData, options, index);
          expect({ endWordIndex: endIndex, word: word }).toEqual(result);
        });
      });
    });
  });
});
