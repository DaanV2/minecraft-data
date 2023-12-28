import * as data from "../../bedrock-samples/metadata/command_modules/mojang-commands.json";
import {
  Command,
  CommandSyntax,
  ParameterSyntax,
  ParameterType,
} from "../../src/commands/interface";
import { Builder } from "../base/builder";

export function generateFromCommands(builder: Builder) {
  data.command_enums.forEach((commandEnum) =>
    generateEnum(builder, commandEnum)
  );
  data.commands.forEach((command) => generateCommand(builder, command));
}

function generateCommand(builder: Builder, command: (typeof data.commands)[0]) {
  const commandName = command.name;

  const data = builder.commands[commandName] ?? {
    name: commandName,
    documentation: command.description,
    syntaxes: [],
    permissionLevel: command.permission_level,
    requiresCheatsEnabled: command.requires_cheats,
  };

  //Check overloads
  command.overloads.forEach((overload) => {
    const syntax: CommandSyntax = {
      name: commandName,
      documentation: data.documentation,
      parameters: [],
    };
    data.syntaxes.push(syntax);

    //Add command name
    syntax.parameters.push({
      text: commandName,
      type: "keyword",
      required: true,
    });

    //Check parameters
    overload.params.forEach((param) => {
      const t = discoverType(param.type.name, builder);

      const p: ParameterSyntax = {
        text: param.name,
        type: t,
        required: param.is_optional === false,
      };

      syntax.parameters.push(p);
    });
  });

  //Update aliases
  command.aliases.forEach((alias) => {
    builder.commands[alias.name] = forAlias(data, alias.name);
  });
}

function forAlias(command: Command, alias: string): Command {
  const result = {
    ...command,
    name: alias,
    documentation: `Command alias: ${alias}\n${command.documentation}`,
  };

  result.syntaxes.forEach((syntax) => {
    syntax.name = alias;

    if (syntax.parameters[0]?.text === command.name) {
      syntax.parameters[0].text = alias;
    }
  });

  return result;
}

function generateEnum(
  builder: Builder,
  commandEnum: (typeof data.command_enums)[0]
) {
  const enumName = commandEnum.name;
  const enumValues = commandEnum.values.map((value) => {
    return {
      value: value.value,
    };
  });

  builder.enums[enumName] = {
    name: enumName,
    documentation: "Command enum: " + enumName,
    values: enumValues,
  };
}

function discoverType(type: string, builder: Builder): ParameterType {
  const e = builder.enums[type];
  if (e.values.length == 1) {
    return "keyword";
  } else if (e.values.length > 1) {
    return `enum:${e.name}`;
  }

  switch (type) {
    default:
      return "unknown";
  }
}
