import { Rule } from "../../types";

type RuleMap = {
  [key: string]: Set<string>;
};

export const fromRuleToSet = (rules: Rule[]): RuleMap => {
  const ruleMap: RuleMap = {};

  rules.forEach((rule) => {
    ruleMap[rule.open] = new Set(rule.closed);
  });

  return ruleMap;
};
