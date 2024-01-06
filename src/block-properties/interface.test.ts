import assert from "node:assert";
import test, { describe } from "node:test";
import { BlockProperties } from "./interface";

describe("block-properties", () => {
  const properties = BlockProperties.properties();

  for (const name in properties) {
    const property = properties[name as keyof typeof properties];

    test(`${name} is correct content`, () => {
      assert.notEqual(property.type, undefined, "type is undefined");
      assert.notEqual(property.name, undefined, "name is undefined");
      assert.notEqual(property.values, undefined, "values is undefined");

      assert.equal(typeof property.name, "string", "name is not a string");
      assert.equal(typeof property.type, "string", "type is not a string");
      assert.equal(typeof property.values, "object", "values is not an array");

      switch (property.type) {
        case "bool":
          property.values.forEach((value) => {
            assert.equal(typeof value, "boolean", "value is not a boolean");
          });
          break;

        case "int":
          property.values.forEach((value) => {
            assert.equal(typeof value, "number", "value is not a number");
          });
          break;

        case "string":
          property.values.forEach((value) => {
            assert.equal(typeof value, "string", "value is not a string");
          });
          break;

        default:
          assert.fail(`Unknown property type: ${JSON.stringify(property)}`);
      }
    });

    test(`${name} is retrievable`, () => {
      const propertyByName = BlockProperties.get(name as keyof typeof properties);
      assert.equal(propertyByName, property);
    });
  }
});
