export interface Rule {
  open: string;
  closed: string[];
}

export interface CustomSplitOptions {
  breakCharacters?: string[];
  breakWords?: string[];
  ignoreCharacters?: string[];
  ignoreWords?: string[];
  customRules: Rule[];
}

export interface IterationData {
  word: string;
  endWordIndex: number | null;
}
