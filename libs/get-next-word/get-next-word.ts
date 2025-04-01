import { CustomSplitOptions, IterationData } from "../../types";
import { fromRuleToSet } from "../from-rules-to-set/from-rules-to-set";
export const getNextWord = (rawData: string, options: CustomSplitOptions, currentIndex: number): IterationData => {
  const { breakCharacters = [], breakWords = [], ignoreCharacters = [], ignoreWords = [], customRules = [] } = options;

  let currentWord = "";

  const rulesSet = fromRuleToSet(customRules);

  while (ignoreCharacters.includes(rawData[currentIndex])) {
    currentIndex++;
  }

  if (breakCharacters.includes(rawData[currentIndex])) {
    currentWord += rawData[currentIndex];
    currentIndex++;
    return { word: currentWord, endWordIndex: currentIndex - 1 };
  }

  let ruleActive: Set<string> | null = null;

  while (currentIndex < rawData.length && (!breakCharacters.includes(rawData[currentIndex]) || ruleActive)) {
    const token = rawData[currentIndex];
    if (ruleActive) {
      if (ruleActive.has(token)) {
        ruleActive = null;
      }
    } else {
      if (token in rulesSet) {
        ruleActive = rulesSet[token];
      }
    }

    currentWord += rawData[currentIndex];
    currentIndex++;
  }
  return { word: currentWord, endWordIndex: currentIndex === rawData.length ? null : currentIndex - 1 };
};
