export interface CustomSplitOptions {
  breakCharacters?: string[];
  breakCharactersRegex?: string[];
  ignoreCharacters?: string[];
}

export interface IterationData {
  word: string;
  endWordIndex: number | null;
}
