import { CustomSplitOptions, IterationData } from "../types";
import { TestCases } from "./test-type";

interface GetNextWordTestCase {
  index: number;
  word: string;
  endIndex: number | null;
}

interface GetNextWordParameters {
  rawData: string;
  cases: GetNextWordTestCase[];
}

export const typescriptTestCases: GetNextWordParameters = {
  rawData: "export interface Task{title:string;description:string;}",
  cases: [
    {
      index: 0,
      word: "export",
      endIndex: 5,
    },
  ],
};
