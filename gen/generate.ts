import { Builder } from "./base/builder";
import { generateFromCommands } from "./commands/import";
import { writeFileSync } from "fs";
import { toCamelCase, toKebabCase } from "./utility/case";
import { saveEnums } from "./generate-enums";
import { saveCommands } from "./generate-commands";

const builder: Builder = {
  commands: {},
  entities: {},
  enums: {},
  files: {},
};

//Commands
generateFromCommands(builder);

//Commands export
Builder.appendToIndex(builder, "src/commands/index.ts", "interface");
saveCommands(builder);

//Enum export
Builder.appendToIndex(builder, "src/enums/index.ts", "interface");
saveEnums(builder);

//Write files
for (const filepath in builder.files) {
  const content = builder.files[filepath];
  writeFileSync(filepath, content);
}
