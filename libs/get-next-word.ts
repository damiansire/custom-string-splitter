import { CustomSplitOptions, IterationData } from "../types";

export const getNextWord = (rawData: string, options: CustomSplitOptions, currentIndex: number): IterationData => {
  const { breakCharacters = [], breakCharactersRegex = [], ignoreCharacters = [] } = options;
  let currentWord = "";
  if (breakCharacters.includes(rawData[currentIndex])) {
  }
  while (currentIndex < rawData.length && !breakCharacters.includes(rawData[currentIndex])) {
    currentWord += rawData[currentIndex];
    currentIndex++;
  }
  return { word: currentWord, endWordIndex: currentIndex + 1 === rawData.length ? null : currentIndex };
};
