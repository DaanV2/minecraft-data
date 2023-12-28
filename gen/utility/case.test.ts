import { describe, it } from "node:test";
import { toCamelCase, toKebabCase } from "./case";
import assert from "node:assert";

describe("Cases", () => {
  it("should be able to convert to camel case", () => {
    const original = "HelloWorld";
    const expected = "helloWorld";
    const trans = toCamelCase(original);

    assert.equal(trans, expected);
  });

  it("Should be able to convert to kebab case", () => {
    const original = "HelloWorld";
    const expected = "hello-world";
    const trans = toKebabCase(original);

    assert.equal(trans, expected);
  });
});
