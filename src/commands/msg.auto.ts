// auto-generated

import { Command } from "./interface";

export const msgCommand: Command = {
  "name": "msg",
  "documentation": "Command alias: msg\nSends a private message to one or more players.",
  "permissionLevel": 0,
  "requiresCheatsEnabled": false,
  "syntaxes": [
    {
      "name": "msg",
      "documentation": "Sends a private message to one or more players.",
      "parameters": [
        {
          "text": "w",
          "type": "keyword",
          "required": true
        },
        {
          "text": "target",
          "type": "selector",
          "required": true
        },
        {
          "text": "message",
          "type": "message",
          "required": true
        }
      ]
    }
  ]
};
