import { fromRuleToSet } from "./from-rules-to-set"; // Ajusta la ruta al archivo correcto
import { Rule } from "../../types"; // Ajusta la ruta al archivo correcto

describe("fromRuleToSet", () => {
  it("should convert an empty array of rules to an empty RuleMap", () => {
    const rules: Rule[] = [];
    const result = fromRuleToSet(rules);
    expect(result).toEqual({});
  });

  it("should convert a single rule to a RuleMap with one entry", () => {
    const rules: Rule[] = [{ open: "key1", closed: ["value1", "value2"] }];
    const result = fromRuleToSet(rules);
    expect(result).toEqual({ key1: new Set(["value1", "value2"]) });
  });

  it("should convert multiple rules to a RuleMap with multiple entries", () => {
    const rules: Rule[] = [
      { open: "key1", closed: ["value1", "value2"] },
      { open: "key2", closed: ["value3", "value4", "value3"] },
      { open: "key3", closed: [] },
    ];
    const result = fromRuleToSet(rules);
    expect(result).toEqual({
      key1: new Set(["value1", "value2"]),
      key2: new Set(["value3", "value4"]),
      key3: new Set([]),
    });
  });

  it("should handle duplicate values in the closed array by creating a Set", () => {
    const rules: Rule[] = [{ open: "key1", closed: ["value1", "value2", "value1"] }];
    const result = fromRuleToSet(rules);
    expect(result).toEqual({ key1: new Set(["value1", "value2"]) });
  });

  it("should work with empty closed arrays", () => {
    const rules: Rule[] = [{ open: "key1", closed: [] }];
    const result = fromRuleToSet(rules);
    expect(result).toEqual({ key1: new Set([]) });
  });

  it("should work with rule objects that have special characters in the key", () => {
    const rules: Rule[] = [{ open: "key.with.dots", closed: ["val1", "val2"] }];
    const result = fromRuleToSet(rules);
    expect(result).toEqual({ "key.with.dots": new Set(["val1", "val2"]) });
  });

  it("should work with rule objects special characters in the key and closed", () => {
    const rules: Rule[] = [{ open: '"', closed: ['"', "<"] }];
    const result = fromRuleToSet(rules);
    expect(result).toEqual({ '"': new Set(['"', "<"]) });
  });
});
