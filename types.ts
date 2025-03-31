export interface CustomSplitOptions {
  breakCharacters?: string[];
  breakWords?: string[];
  ignoreCharacters?: string[];
  ignoreWords?: string[];
}

export interface IterationData {
  word: string;
  endWordIndex: number | null;
}
