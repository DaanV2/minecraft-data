import assert from "node:assert";
import { Blocks } from "./interface";
import test, { describe } from "node:test";
import { BlockProperties } from "../block-properties";

describe("Blocks", () => {
  for (const blockId of Blocks.getBlockIds()) {
    const block = Blocks.get(blockId);

    test(`${blockId} should have a value`, () => {
      assert(block !== undefined, "block is undefined");
    });

    if (block === undefined) continue;

    test(`${blockId} should have proper content`, () => {
      assert(typeof block.name === "string");
      assert(block.properties.length >= 0, "Not an array");
    });

    if (block.properties.length === 0) continue;

    test(`${blockId} properties should exist`, () => {
      for (const property of block.properties) {
        assert(
          BlockProperties.has(property),
          `Property ${property} does not exist`,
        );
      }
    });
  }
});
