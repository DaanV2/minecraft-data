// auto-generated

import { Command } from "./interface";

export const tellrawCommand: Command = {
  "name": "tellraw",
  "documentation": "Sends a JSON message to players.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": false,
  "syntaxes": [
    {
      "name": "tellraw",
      "documentation": "Sends a JSON message to players.",
      "parameters": [
        {
          "text": "tellraw",
          "type": "keyword",
          "required": true
        },
        {
          "text": "target",
          "type": "selector",
          "required": true
        },
        {
          "text": "raw json message",
          "type": "json",
          "required": true
        }
      ]
    }
  ]
};
