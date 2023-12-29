// auto-generated

import { Command } from "./interface";

export const eventCommand: Command = {
  "name": "event",
  "documentation": "Triggers an event for the specified object(s)",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "event",
      "documentation": "Triggers an event for the specified object(s)",
      "parameters": [
        {
          "text": "event",
          "type": "keyword",
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
          "text": "eventName",
          "type": "enum:EntityEvents",
          "required": true
        }
      ]
    }
  ]
};
