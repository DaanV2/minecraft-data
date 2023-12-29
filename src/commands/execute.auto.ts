// auto-generated

import { Command } from "./interface";

export const executeCommand: Command = {
  "name": "execute",
  "documentation": "Executes a command on behalf of one or more entities.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "as",
          "type": "keyword",
          "required": true
        },
        {
          "text": "origin",
          "type": "selector",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": true
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "at",
          "type": "keyword",
          "required": true
        },
        {
          "text": "origin",
          "type": "selector",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": true
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "in",
          "type": "keyword",
          "required": true
        },
        {
          "text": "dimension",
          "type": "enum:Dimension",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": true
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "positioned",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position",
          "type": "unknown",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": true
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "positioned",
          "type": "keyword",
          "required": true
        },
        {
          "text": "as",
          "type": "keyword",
          "required": true
        },
        {
          "text": "origin",
          "type": "selector",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": true
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "rotated",
          "type": "keyword",
          "required": true
        },
        {
          "text": "yaw",
          "type": "rotation",
          "required": true
        },
        {
          "text": "pitch",
          "type": "rotation",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": true
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "rotated",
          "type": "keyword",
          "required": true
        },
        {
          "text": "as",
          "type": "keyword",
          "required": true
        },
        {
          "text": "origin",
          "type": "selector",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": true
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "facing",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position",
          "type": "unknown",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": true
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "facing",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "keyword",
          "required": true
        },
        {
          "text": "origin",
          "type": "selector",
          "required": true
        },
        {
          "text": "anchor",
          "type": "enum:ActorLocation",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": true
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "align",
          "type": "keyword",
          "required": true
        },
        {
          "text": "axes",
          "type": "player",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": true
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "anchored",
          "type": "keyword",
          "required": true
        },
        {
          "text": "anchored",
          "type": "enum:ActorLocation",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": true
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "subcommand",
          "type": "enum:Option_If_Unless",
          "required": true
        },
        {
          "text": "block",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position",
          "type": "unknown",
          "required": true
        },
        {
          "text": "block",
          "type": "enum:Block",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": false
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "subcommand",
          "type": "enum:Option_If_Unless",
          "required": true
        },
        {
          "text": "block",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position",
          "type": "unknown",
          "required": true
        },
        {
          "text": "block",
          "type": "enum:Block",
          "required": true
        },
        {
          "text": "blockStates",
          "type": "unknown",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": false
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "subcommand",
          "type": "enum:Option_If_Unless",
          "required": true
        },
        {
          "text": "blocks",
          "type": "keyword",
          "required": true
        },
        {
          "text": "begin",
          "type": "unknown",
          "required": true
        },
        {
          "text": "end",
          "type": "unknown",
          "required": true
        },
        {
          "text": "destination",
          "type": "unknown",
          "required": true
        },
        {
          "text": "scan mode",
          "type": "enum:BlocksScanMode",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": false
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "subcommand",
          "type": "enum:Option_If_Unless",
          "required": true
        },
        {
          "text": "entity",
          "type": "keyword",
          "required": true
        },
        {
          "text": "target",
          "type": "selector",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": false
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "subcommand",
          "type": "enum:Option_If_Unless",
          "required": true
        },
        {
          "text": "score",
          "type": "keyword",
          "required": true
        },
        {
          "text": "target",
          "type": "selector",
          "required": true
        },
        {
          "text": "objective",
          "type": "scoreboard:objective",
          "required": true
        },
        {
          "text": "operation",
          "type": "unknown",
          "required": true
        },
        {
          "text": "source",
          "type": "selector",
          "required": true
        },
        {
          "text": "objective",
          "type": "scoreboard:objective",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": false
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "subcommand",
          "type": "enum:Option_If_Unless",
          "required": true
        },
        {
          "text": "score",
          "type": "keyword",
          "required": true
        },
        {
          "text": "target",
          "type": "selector",
          "required": true
        },
        {
          "text": "objective",
          "type": "scoreboard:objective",
          "required": true
        },
        {
          "text": "matches",
          "type": "keyword",
          "required": true
        },
        {
          "text": "range",
          "type": "unknown",
          "required": true
        },
        {
          "text": "chainedCommand",
          "type": "command",
          "required": false
        }
      ]
    },
    {
      "name": "execute",
      "documentation": "Executes a command on behalf of one or more entities.",
      "parameters": [
        {
          "text": "execute",
          "type": "keyword",
          "required": true
        },
        {
          "text": "run",
          "type": "keyword",
          "required": true
        },
        {
          "text": "command",
          "type": "command",
          "required": true
        }
      ]
    }
  ]
};
