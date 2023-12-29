// auto-generated

import { Command } from "./interface";

export const mobeventCommand: Command = {
  "name": "mobevent",
  "documentation": "Controls what mob events are allowed to run.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "mobevent",
      "documentation": "Controls what mob events are allowed to run.",
      "parameters": [
        {
          "text": "mobevent",
          "type": "keyword",
          "required": true
        },
        {
          "text": "event",
          "type": "enum:MobEvent",
          "required": true
        },
        {
          "text": "value",
          "type": "boolean",
          "required": false
        }
      ]
    }
  ]
};
