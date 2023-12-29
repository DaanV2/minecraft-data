// auto-generated

import { Command } from "./interface";

export const sayCommand: Command = {
  "name": "say",
  "documentation": "Sends a message in the chat to other players.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": false,
  "syntaxes": [
    {
      "name": "say",
      "documentation": "Sends a message in the chat to other players.",
      "parameters": [
        {
          "text": "say",
          "type": "keyword",
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
