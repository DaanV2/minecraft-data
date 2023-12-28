import { Builder } from "./base/builder";
import { generateFromCommands } from "./commands/import";
import { writeFileSync } from "fs";
import { toCamelCase, toKebabCase } from "./utility/case";
import { saveEnums } from "./generate-enums";

const builder: Builder = {
  commands: {},
  entities: {},
  enums: {},
  files: {},
};

//Commands
generateFromCommands(builder);

//Enum export
Builder.appendToIndex(builder, "src/enums/index.ts", "interface");
saveEnums(builder);

//Write files
for (const filepath in builder.files) {
  const content = builder.files[filepath];
  writeFileSync(filepath, content);
}
