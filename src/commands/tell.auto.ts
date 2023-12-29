// auto-generated

import { Command } from "./interface";

export const tellCommand: Command = {
  "name": "tell",
  "documentation": "Sends a private message to one or more players.",
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
          "type": "unknown",
          "required": true
        }
      ]
    }
  ]
};
