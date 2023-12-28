import { Enum } from "../src/enums/interface";
import { Builder } from "./base/builder";
import { FileBuilder } from "./base/file-builder";
import { toCamelCase, toKebabCase } from "./utility/case";

export function saveEnums(builder: Builder) {
  for (const enumName in builder.enums) {
    const data = builder.enums[enumName];

    if (data.values.length <= 1) {
      continue;
    }

    saveEnum(builder, data);
  }
}

function saveEnum(builder: Builder, item: Enum) {
  const enumData = item;
  const name = toCamelCase(enumData.name);
  const filename = `${toKebabCase(enumData.name)}.auto.ts`;

  const f = new FileBuilder(`src/enums/${filename}`);

  const strData = JSON.stringify(enumData, null, 2);
  f.appendLine(`import { EnumHandler } from "./interface";`)
    .appendLineBreak()
    .appendLine(`const data = ${strData};`)
    .appendLineBreak()
    .appendLine(`export const ${name}Enum = new EnumHandler(data);`)
    .save();

  Builder.appendToIndex(
    builder,
    "src/enums/index.ts",
    filename.replace(".ts", "")
  );
}
