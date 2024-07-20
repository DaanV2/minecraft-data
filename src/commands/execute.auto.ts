// auto-generated

import { Command } from "./interface";

export const executeCommand: Command = {
  name: "execute",
  documentation: "Executes a command on behalf of one or more entities.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "as",
          type: "keyword",
          required: true,
        },
        {
          text: "origin",
          type: "selector",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: true,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "at",
          type: "keyword",
          required: true,
        },
        {
          text: "origin",
          type: "selector",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: true,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "in",
          type: "keyword",
          required: true,
        },
        {
          text: "dimension",
          type: "enum:dimension",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: true,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "positioned",
          type: "keyword",
          required: true,
        },
        {
          text: "position x",
          type: "coordinate:float",
          required: true,
        },
        {
          text: "position y",
          type: "coordinate:float",
          required: true,
        },
        {
          text: "position z",
          type: "coordinate:float",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: true,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "positioned",
          type: "keyword",
          required: true,
        },
        {
          text: "as",
          type: "keyword",
          required: true,
        },
        {
          text: "origin",
          type: "selector",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: true,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "rotated",
          type: "keyword",
          required: true,
        },
        {
          text: "yaw",
          type: "rotation",
          required: true,
        },
        {
          text: "pitch",
          type: "rotation",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: true,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "rotated",
          type: "keyword",
          required: true,
        },
        {
          text: "as",
          type: "keyword",
          required: true,
        },
        {
          text: "origin",
          type: "selector",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: true,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "facing",
          type: "keyword",
          required: true,
        },
        {
          text: "position x",
          type: "coordinate:float",
          required: true,
        },
        {
          text: "position y",
          type: "coordinate:float",
          required: true,
        },
        {
          text: "position z",
          type: "coordinate:float",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: true,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "facing",
          type: "keyword",
          required: true,
        },
        {
          text: "entity",
          type: "keyword",
          required: true,
        },
        {
          text: "origin",
          type: "selector",
          required: true,
        },
        {
          text: "anchor",
          type: "enum:actorlocation",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: true,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "align",
          type: "keyword",
          required: true,
        },
        {
          text: "axes",
          type: "player",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: true,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "anchored",
          type: "keyword",
          required: true,
        },
        {
          text: "anchored",
          type: "enum:actorlocation",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: true,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "subcommand",
          type: "enum:option_if_unless",
          required: true,
        },
        {
          text: "block",
          type: "keyword",
          required: true,
        },
        {
          text: "position x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "position y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "position z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "block",
          type: "enum:block",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: false,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "subcommand",
          type: "enum:option_if_unless",
          required: true,
        },
        {
          text: "block",
          type: "keyword",
          required: true,
        },
        {
          text: "position x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "position y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "position z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "block",
          type: "enum:block",
          required: true,
        },
        {
          text: "blockStates",
          type: "block_states",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: false,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "subcommand",
          type: "enum:option_if_unless",
          required: true,
        },
        {
          text: "blocks",
          type: "keyword",
          required: true,
        },
        {
          text: "begin x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "begin y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "begin z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "end x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "end y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "end z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "destination x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "destination y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "destination z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "scan mode",
          type: "enum:blocksscanmode",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: false,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "subcommand",
          type: "enum:option_if_unless",
          required: true,
        },
        {
          text: "entity",
          type: "keyword",
          required: true,
        },
        {
          text: "target",
          type: "selector",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: false,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "subcommand",
          type: "enum:option_if_unless",
          required: true,
        },
        {
          text: "score",
          type: "keyword",
          required: true,
        },
        {
          text: "target",
          type: "selector",
          required: true,
        },
        {
          text: "objective",
          type: "scoreboard:objective",
          required: true,
        },
        {
          text: "operation",
          type: "operator:comparison",
          required: true,
        },
        {
          text: "source",
          type: "selector",
          required: true,
        },
        {
          text: "objective",
          type: "scoreboard:objective",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: false,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "subcommand",
          type: "enum:option_if_unless",
          required: true,
        },
        {
          text: "score",
          type: "keyword",
          required: true,
        },
        {
          text: "target",
          type: "selector",
          required: true,
        },
        {
          text: "objective",
          type: "scoreboard:objective",
          required: true,
        },
        {
          text: "matches",
          type: "keyword",
          required: true,
        },
        {
          text: "range",
          type: "range:integer",
          required: true,
        },
        {
          text: "chainedCommand",
          type: "command",
          required: false,
        },
      ],
    },
    {
      name: "execute",
      documentation: "Executes a command on behalf of one or more entities.",
      parameters: [
        {
          text: "execute",
          type: "keyword",
          required: true,
        },
        {
          text: "run",
          type: "keyword",
          required: true,
        },
        {
          text: "command",
          type: "command",
          required: true,
        },
      ],
    },
  ],
};
