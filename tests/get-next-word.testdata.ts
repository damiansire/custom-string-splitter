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
    {
      index: 6,
      word: "interface",
      endIndex: 15,
    },
    {
      index: 7,
      word: "interface",
      endIndex: 15,
    },
    {
      index: 16,
      word: "Task",
      endIndex: 20,
    },
    {
      index: 21,
      word: "{",
      endIndex: 21,
    },
    {
      index: 22,
      word: "title",
      endIndex: 26,
    },
    {
      index: 27,
      word: ":",
      endIndex: 27,
    },
    {
      index: 28,
      word: "string",
      endIndex: 33,
    },
    {
      index: 34,
      word: ";",
      endIndex: 34,
    },
    {
      index: 35,
      word: "description",
      endIndex: 45,
    },
    {
      index: 46,
      word: ":",
      endIndex: 46,
    },
    {
      index: 47,
      word: "string",
      endIndex: 52,
    },
    {
      index: 53,
      word: ";",
      endIndex: 53,
    },
    {
      index: 54,
      word: "}",
      endIndex: 54,
    },
    {
      index: 55,
      word: "",
      endIndex: null,
    },
  ],
};
