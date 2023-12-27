import { ScriptTarget, createSourceFile } from "typescript";
import { Builder } from "./base/builder";
import { generateFromCommands } from "./commands/import";
import { writeFileSync } from "fs";


const builder: Builder = {
  commands: {},
  entities: {},
  enums: {},
}


//Commands
generateFromCommands(builder);

//Enum export
for (const enumName in builder.enums) {
  const enumData = builder.enums[enumName];
  let strData = JSON.stringify(enumData, null, 2);

  strData = `// auto-generated
import { Enum } from "./interface";
export const ${enumData.name}: Enum = ${strData};`

  writeFileSync(`src/enums/${enumData.name}.auto.ts`, strData);
}