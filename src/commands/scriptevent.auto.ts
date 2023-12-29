// auto-generated

import { Command } from "./interface";

export const scripteventCommand: Command = {
  "name": "scriptevent",
  "documentation": "Triggers a script event with an ID and message.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "scriptevent",
      "documentation": "Triggers a script event with an ID and message.",
      "parameters": [
        {
          "text": "scriptevent",
          "type": "keyword",
          "required": true
        },
        {
          "text": "messageId",
          "type": "player",
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
