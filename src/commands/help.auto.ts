// auto-generated

import { Command } from "./interface";

export const helpCommand: Command = {
  "name": "?",
  "documentation": "Command alias: ?\nProvides help/list of commands.",
  "permissionLevel": 0,
  "requiresCheatsEnabled": false,
  "syntaxes": [
    {
      "name": "?",
      "documentation": "Provides help/list of commands.",
      "parameters": [
        {
          "text": "?",
          "type": "keyword",
          "required": true
        },
        {
          "text": "command",
          "type": "enum:commandname",
          "required": false
        }
      ]
    },
    {
      "name": "?",
      "documentation": "Provides help/list of commands.",
      "parameters": [
        {
          "text": "?",
          "type": "keyword",
          "required": true
        },
        {
          "text": "page",
          "type": "integer",
          "required": true
        }
      ]
    }
  ]
};
