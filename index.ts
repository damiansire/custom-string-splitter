import { CustomSplitOptions, IterationData } from "./types";
import { getNextWord } from "./libs/get-next-word/get-next-word";
const fs = require("fs");

export const customSplit = (rawData: string, options: CustomSplitOptions) => {
  let secuenceArray: string[] = [];
  for (let index = 0; index < rawData.length; index++) {
    const currentChar = rawData[index];
    const nextWord: IterationData = getNextWord(rawData, options, index);
    if (nextWord.word) {
      secuenceArray.push(nextWord.word);
    }
    if (nextWord.endWordIndex !== null) {
      index = nextWord.endWordIndex;
    }
  }

  return secuenceArray;
};
