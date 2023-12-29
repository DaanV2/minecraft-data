import test, { describe } from "node:test";
import { Enums } from "./enums";
import { EnumHandler } from "./interface";
import assert from "node:assert";

describe("Enums", () => {
  const enums = Object.entries(Enums).filter(
    (data) => data[1] instanceof EnumHandler
  ) as [keyof typeof Enums, EnumHandler][];

  enums.forEach(([key, entry]) => {
    test(`${key} is properly filled`, () => {
      assert.notEqual(entry, undefined);

      assert.notEqual(entry.name, undefined);
      assert.notEqual(entry.name, "");
      assert.equal(typeof entry.name, "string");

      entry.values.forEach((value) => {
        assert.notEqual(value, undefined);
        assert.notEqual(value.value, undefined);
        assert.notEqual(value.value, "");
        assert.equal(typeof value.value, "string");
      });
    });

    test(`${key} is retrievable`, () => {
      const data = Enums.get(key as any);

      assert.equal(data, entry);
    });
  });
});
