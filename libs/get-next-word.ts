import { CustomSplitOptions, IterationData } from "../types";

export const getNextWord = (rawData: string, options: CustomSplitOptions, currentIndex: number): IterationData => {
  const { breakCharacters = [], breakWords = [], ignoreCharacters = [], ignoreWords = [] } = options;
  let currentWord = "";

  while (ignoreCharacters.includes(rawData[currentIndex])) {
    currentIndex++;
  }

  if (breakCharacters.includes(rawData[currentIndex])) {
    currentWord += rawData[currentIndex];
    currentIndex++;
    return { word: currentWord, endWordIndex: currentIndex - 1 };
  }

  while (currentIndex < rawData.length && !breakCharacters.includes(rawData[currentIndex])) {
    currentWord += rawData[currentIndex];
    currentIndex++;
  }
  return { word: currentWord, endWordIndex: currentIndex === rawData.length ? null : currentIndex - 1 };
};
