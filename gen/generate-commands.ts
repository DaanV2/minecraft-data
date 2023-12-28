import { Command } from "../src/commands/interface";
import { Builder } from "./base/builder";
import { FileBuilder } from "./base/file-builder";
import { toCamelCase, toKebabCase } from "./utility/case";

export function saveCommands(builder: Builder) {
  for (const commandName in builder.commands) {
    const data = builder.commands[commandName];

    if (data.syntaxes.length <= 0) {
      continue;
    }

    saveCommand(builder, data);
  }
}

function saveCommand(builder: Builder, item: Command) {
  const enumData = item;
  const name = toCamelCase(enumData.name);
  const filename = `${toKebabCase(enumData.name)}.auto.ts`;

  const f = new FileBuilder(`src/commands/${filename}`);

  const strData = JSON.stringify(enumData, null, 2);
  f.appendLine(`import { Command } from "./interface";`)
    .appendLineBreak()
    .appendLine(`export const ${name}: Command = ${strData};`)
    .save();

  Builder.appendToIndex(
    builder,
    "src/commands/index.ts",
    filename.replace(".ts", "")
  );
}
