import { Command } from "../src/commands/interface";
import { Builder } from "./base/builder";
import { FileBuilder } from "./base/file-builder";
import { toCamelCase, toKebabCase } from "./utility/case";

export function saveCommands(builder: Builder) {
  for (const commandName in builder.commands) {
    const data = builder.commands[commandName];

    saveCommand(builder, data);
  }
}

function saveCommand(builder: Builder, item: Command) {
  let name = toCamelCase(item.name);
  let filename = `${toKebabCase(item.name)}.auto.ts`;

  if (item.name === "?") {
    filename = "help.auto.ts";
    name = "help";
  }

  const f = new FileBuilder(`src/commands/${filename}`);

  const strData = JSON.stringify(item, null, 2);
  f.appendLine(`import { Command } from "./interface";`)
    .appendLineBreak()
    .appendLine(`export const ${name}Command: Command = ${strData};`)
    .save();

  Builder.appendToIndex(
    builder,
    "src/commands/index.ts",
    filename.replace(".ts", "")
  );
}
