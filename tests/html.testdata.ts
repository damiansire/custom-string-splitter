import { TestCases } from "./test-type";

export const htmlTestCases: TestCases = [
  { input: "<div><p>Hello</p></div>", expectedOutput: ["<div>", "<p>", "Hello", "</p>", "</div>"] },
  { input: '<div><img src="image.jpg" /></div>', expectedOutput: ["<div>", '<img src="image.jpg" />', "</div>"] },
  {
    input: '<div class="container"><p id="my-paragraph">Content</p></div>',
    expectedOutput: ['<div class="container">', '<p id="my-paragraph">', "Content", "</p>", "</div>"],
  },
  {
    input: "<div><p>Hello <b>world</b>!</p><span> hello word2 </span></div>",
    expectedOutput: [
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
    ],
  },
  { input: "  <div>  \n\t<p>Text</p>  </div>  ", expectedOutput: ["<div>", "<p>", "Text", "</p>", "</div>"] },
  { input: "<div></div><br /><hr />", expectedOutput: ["<div>", "</div>", "<br />", "<hr />"] },
  { input: '<img src="/images/logo.png" alt="Logo" />', expectedOutput: ['<img src="/images/logo.png" alt="Logo" />'] },
  {
    input: "<div><![CDATA[This is CDATA content]]></div>",
    expectedOutput: ["<div>", "<![CDATA[This is CDATA content]]>", "</div>"],
  },
  {
    input: '<button (click)="increment()"> Increment </button>',
    expectedOutput: ['<button (click)="increment()">', " Increment ", "</button>"],
  },
];
