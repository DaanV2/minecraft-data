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
    permissionLevel: command.permission_level,
    requiresCheatsEnabled: command.requires_cheats,
    syntaxes: [],
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
      // Enum like?
      if (param.name.includes("|")) {
        const [name] = param.name.split("|");

        param.name = name;
      }
      if (param.name.startsWith("<") && param.name.endsWith(">")) {
        param.name = param.name.slice(1, -1);
      }

      // Convert from position to x y z parameters
      if (
        param.type.name === "POSITION_FLOAT" ||
        param.type.name === "POSITION"
      ) {
        const type =
          param.type.name === "POSITION_FLOAT"
            ? "coordinate:float"
            : "coordinate:integer";

        syntax.parameters.push(
          {
            text: param.name + " x",
            type: type,
            required: param.is_optional === false,
          },
          {
            text: param.name + " y",
            type: type,
            required: param.is_optional === false,
          },
          {
            text: param.name + " z",
            type: type,
            required: param.is_optional === false,
          }
        );

        return;
      }

      const t = discoverType(param.type.name, builder);
      if (t === "keyword") {
        const data = builder.enums[param.type.name.toLowerCase()];
        if (data) {
          param.name = data.values[0].value;
        }
      }

      const p: ParameterSyntax = {
        text: param.name,
        type: t,
        required: param.is_optional === false,
      };

      if (param.type.name.includes("WILDCARD")) {
        p.options = {
          wildcard: true,
        };
      }

      syntax.parameters.push(p);
    });
  });

  //Update aliases
  builder.commands[commandName] = data;

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
  let enumName = commandEnum.name;
  const enumValues = commandEnum.values.map((value) => {
    return {
      value: value.value,
    };
  });

  const p = {
    name: enumName,
    documentation: "Command enum: " + enumName,
    values: enumValues,
  }
  
  if (enumName === "delete") {
    enumName = "deleteOperation";
    p.name = enumName;
  }

  builder.enums[enumName.toLowerCase()] = p;
}

function discoverType(type: string, builder: Builder): ParameterType {
  if (type.startsWith("WILDCARD")) {
    type = type.slice("WILDCARD".length);
  }

  switch (type) {
    case "BOOLEAN":
      return "boolean";
    case "INT":
      return "integer";
    case "FULLINTEGERRANGE":
      return "range:integer";
  }

  const e = builder.enums[type.toLowerCase()];

  if (e) {
    if (e.values.length == 1) {
      return "keyword";
    } else if (e.values.length > 1) {
      return `enum:${e.name.toLowerCase()}`;
    }
  }

  switch (type) {
    case "BLOCK_STATE_ARRAY":
      return "block_states";
    case "COMPAREOPERATOR":
      return "operator:comparison";
    case "EXECUTECHAINEDOPTION_0":
      return "command";
    case "GAMETESTNAME":
      return "gametest:name";
    case "GAMETESTTAG":
      return "gametest:tag";
    case "ID":
      return "player";
    case "JSON_OBJECT":
      return "json";
    case "MESSAGE_ROOT":
      return "message";
    case "OPERATOR":
      return "operator";
    case "PATHCOMMAND":
      return "mcfunction";
    case "postfix_l":
      return "level";
    case "RAWTEXT":
      return "json:rawtext";
    case "RVAL":
      return "rotation";
    case "SCOREBOARDOBJECTIVES":
      return "scoreboard:objective";
    case "SELECTION":
      return "selector";
    case "SLASHCOMMAND":
      return "command";
    case "VAL":
      return "value";
    case "TAGVALUES":
      return "tag";
    default:
      console.log(`Unknown type: ${type}`);
      return "unknown";
  }
}
