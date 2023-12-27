import * as data from '../../bedrock-samples/metadata/command_modules/mojang-commands.json';
import { Builder } from '../base/builder';

export function generateFromCommands(builder: Builder) {
  

  data.command_enums.forEach((commandEnum) => generateEnum(builder, commandEnum));
}

function generateEnum(builder: Builder, commandEnum: typeof data.command_enums[0]) {
  const enumName = commandEnum.name;
  const enumValues = commandEnum.values.map((value) => {
    return {
      value: value.value,
    }
  });

  builder.enums[enumName] = {
    name: enumName,
    description: 'Command enum: ' + enumName,
    values: enumValues,
  }
}