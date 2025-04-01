import { describe, test, expect } from "@jest/globals";
import { typeScriptCases } from "./tests/typescript.testdata";
import { htmlTestCases } from "./tests/html.testdata";
import { customSplit } from ".";

describe("customSplit", () => {
  describe("should split Typescript code string into tokens", () => {
    const options = {
      breakCharacters: ["{", "}", ";", ":", ",", "=", "+", "(", ")", ".", " ", "[", "]"],
      breakWords: [],
      ignoreCharacters: ["\n", "\t", " "],
      ignoreWords: [],
      customRules: [
        {
          open: '"',
          closed: ['"'],
        },
        {
          open: "'",
          closed: ["'"],
        },
      ],
    };

    typeScriptCases.forEach(({ input, expectedOutput }) => {
      test(`should split '${input}' into tokens correctly`, () => {
        const result = customSplit(input, options);
        expect(result).toEqual(expectedOutput);
      });
    });
  });
});

/* HTML
describe("customSplit", () => {
  // Casos de prueba
  it("should split a simple HTML string into tags and content", () => {
    const htmlString = "<div><p>Hello</p></div>";
    const expectedResult = ["<div>", "<p>", "Hello", "</p>", "</div>"];

    expect(customSplit(htmlString)).toEqual(expectedResult);
  });

  it("should handle self-closing tags", () => {
    const htmlString = '<div><img src="image.jpg" /></div>';
    const expectedResult = ["<div>", '<img src="image.jpg" />', "</div>"];

    expect(customSplit(htmlString)).toEqual(expectedResult);
  });

  it("should handle tags with attributes", () => {
    const htmlString = '<div class="container"><p id="my-paragraph">Content</p></div>';
    const expectedResult = ['<div class="container">', '<p id="my-paragraph">', "Content", "</p>", "</div>"];

    expect(customSplit(htmlString)).toEqual(expectedResult);
  });

  it("should handle nested tags", () => {
    const htmlString = "<div><p>Hello <b>world</b>!</p><span> hello word2 </span></div>";
    const expectedResult = [
      "<div>",
      "<p>",
      "Hello",
      "<b>",
      "world",
      "</b>",
      "!",
      "</p>",
      "<span>",
      "hello word2",
      "</span>",
      "</div>",
    ];

    expect(customSplit(htmlString)).toEqual(expectedResult);
  });

  it("should ignore whitespace around tags", () => {
    const htmlString = "  <div>  \n\t<p>Text</p>  </div>  ";
    const expectedResult = ["<div>", "<p>", "Text", "</p>", "</div>"];

    expect(customSplit(htmlString)).toEqual(expectedResult);
  });

  it("should handle empty tags", () => {
    const htmlString = "<div></div><br /><hr />";
    const expectedResult = ["<div>", "</div>", "<br />", "<hr />"];

    expect(customSplit(htmlString)).toEqual(expectedResult);
  });

  it("should handle tags with forward slashes in attributes", () => {
    const htmlString = '<img src="/images/logo.png" alt="Logo" />';
    const expectedResult = ['<img src="/images/logo.png" alt="Logo" />'];

    expect(customSplit(htmlString)).toEqual(expectedResult);
  });

  it("should handle CDATA sections", () => {
    const htmlString = "<div><![CDATA[This is CDATA content]]></div>";
    const expectedResult = ["<div>", "<![CDATA[This is CDATA content]]>", "</div>"];

    expect(customSplit(htmlString)).toEqual(expectedResult);
  });

  it("should return an empty array for an empty string", () => {
    expect(customSplit("")).toEqual([]);
  });

  it("return the string for a string", () => {
    expect(customSplit("This is just plain text")).toEqual(["This is just plain text"]);
  });

  it("should split angular tags", () => {
    const htmlString = '<button (click)="increment()"> Increment </button>';
    const expectedResult = ['<button (click)="increment()">', " Increment ", "</button>"];

    expect(customSplit(htmlString)).toEqual(expectedResult);
  });
});
*/
