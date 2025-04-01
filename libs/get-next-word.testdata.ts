interface GetNextWordTestCase {
  index: number;
  word: string;
  endIndex: number | null;
}

interface GetNextWordParameters {
  description: string;
  rawData: string;
  cases: GetNextWordTestCase[];
}

export const typescriptTestCases: GetNextWordParameters[] = [
  {
    description: "Get next word from a exported Interface string with typescript code",
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
  },
  {
    description: "Get next word from a enum string with typescript code",
    rawData: `enum ProjectState { Cancelled = "Cancelled", Completed = "Completed", InProgress = "In Progress", Pending = "Pending", Blocked = "Blocked", }`,
    cases: [
      {
        index: 0,
        word: "enum",
        endIndex: 3,
      },
      {
        index: 4,
        word: "ProjectState",
        endIndex: 16,
      },
      {
        index: 5,
        word: "ProjectState",
        endIndex: 16,
      },
      {
        index: 17,
        word: "{",
        endIndex: 18,
      },
      {
        index: 18,
        word: "{",
        endIndex: 18,
      },
      {
        index: 19,
        word: "Cancelled",
        endIndex: 28,
      },
      {
        index: 20,
        word: "Cancelled",
        endIndex: 28,
      },
      {
        index: 29,
        word: "=",
        endIndex: 30,
      },
      {
        index: 30,
        word: "=",
        endIndex: 30,
      },
      {
        index: 31,
        word: '"Cancelled"',
        endIndex: 42,
      },
      {
        index: 32,
        word: '"Cancelled"',
        endIndex: 42,
      },
      { index: 43, word: ",", endIndex: 43 },
      { index: 43, word: ",", endIndex: 43 },
      { index: 44, word: "Completed", endIndex: 53 },
      { index: 45, word: "Completed", endIndex: 53 },
      { index: 54, word: "=", endIndex: 55 },
      { index: 55, word: "=", endIndex: 55 },
      { index: 56, word: '"Completed"', endIndex: 67 },
      { index: 57, word: '"Completed"', endIndex: 67 },
      { index: 68, word: ",", endIndex: 68 },
      { index: 68, word: ",", endIndex: 68 },
      { index: 69, word: "InProgress", endIndex: 79 },
      { index: 70, word: "InProgress", endIndex: 79 },
      { index: 80, word: "=", endIndex: 81 },
      { index: 81, word: "=", endIndex: 81 },
      { index: 82, word: '"In Progress"', endIndex: 95 },
      { index: 83, word: '"In Progress"', endIndex: 95 },
      { index: 96, word: ",", endIndex: 96 },
      { index: 96, word: ",", endIndex: 96 },
      { index: 97, word: "Pending", endIndex: 104 },
      { index: 98, word: "Pending", endIndex: 104 },
      { index: 105, word: "=", endIndex: 106 },
      { index: 106, word: "=", endIndex: 106 },
      { index: 107, word: '"Pending"', endIndex: 116 },
      { index: 108, word: '"Pending"', endIndex: 116 },
      { index: 117, word: ",", endIndex: 117 },
      { index: 117, word: ",", endIndex: 117 },
      { index: 118, word: "Blocked", endIndex: 125 },
      { index: 119, word: "Blocked", endIndex: 125 },
      { index: 126, word: "=", endIndex: 127 },
      { index: 127, word: "=", endIndex: 127 },
      { index: 128, word: '"Blocked"', endIndex: 137 },
      { index: 129, word: '"Blocked"', endIndex: 137 },
      { index: 138, word: ",", endIndex: 138 },
      { index: 138, word: ",", endIndex: 138 },
      { index: 139, word: "}", endIndex: 140 },
      { index: 140, word: "}", endIndex: 140 },
    ],
  },
];
