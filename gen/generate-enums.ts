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

  makeModules(builder);
}

function saveEnum(builder: Builder, item: Enum) {
  const enumData = item;
  const name = toCamelCase(enumData.name);
  const filename = `${toKebabCase(enumData.name)}.auto.ts`;

  const f = new FileBuilder(`src/enums/${filename}`);

  const write = {
    ...enumData,
    name: enumData.name.toLowerCase(),
  };

  const strData = JSON.stringify(write, null, 2);
  f.appendLine(`import { EnumHandler, Enum } from "./interface";`)
    .appendLineBreak()
    .appendLine(`const data: Enum = ${strData};`)
    .appendLineBreak()
    .appendLine(`export const ${name}Enum = new EnumHandler(data);`)
    .save();

  Builder.appendToIndex(
    builder,
    "src/enums/index.ts",
    filename.replace(".ts", "")
  );
}

function makeModules(builder: Builder) {
  const f = new FileBuilder("src/enums/enums.ts");

  const enums = Object.entries(builder.enums).filter(
    (entry) => entry[1].values.length > 1
  );

  //Start imports
  f.appendLine(`import { EnumHandler } from "./interface";`).appendLine(
    `import { NonFunctionPropertyNames } from "../util/types";`
  );

  enums.forEach(([key, entry]) => {
    const name = toCamelCase(entry.name);
    f.appendLine(
      `import { ${name}Enum } from "./${toKebabCase(entry.name)}.auto";`
    );
  });

  f.appendLineBreak()
    .appendLine(`/** The types of enum available */`)
    .appendLine(
      "export type EnumType = NonFunctionPropertyNames<typeof Enums>;"
    )
    .appendLineBreak();

  //Start namespace
  f.appendLine(`/** The enum handlers */`).appendLine(
    `export namespace Enums {`
  );

  enums.forEach(([key, entry]) => {
    const name = toCamelCase(entry.name);
    f.appendLine(`  export const ${name.toLowerCase()} = ${name}Enum;`);
  });

  f.appendLineBreak()
    .appendLine(`  /**`)
    .appendLine(`   * Get an enum handler by type`)
    .appendLine(`   * @param type The type of enum to get`)
    .appendLine(`   * @returns The enum handler`)
    .appendLine(`   */`)
    .appendLine(
      `  export function get(type: EnumType): EnumHandler {`
    )
    .appendLine(`    return Enums[type];`)
    .appendLine(`  }`);

  f.appendLine(`}`);
  f.save();

  Builder.appendToIndex(builder, "src/enums/index.ts", "enums");
}
