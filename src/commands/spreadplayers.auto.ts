// auto-generated

import { Command } from "./interface";

export const spreadplayersCommand: Command = {
  "name": "spreadplayers",
  "documentation": "Teleports entities to random locations.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "spreadplayers",
      "documentation": "Teleports entities to random locations.",
      "parameters": [
        {
          "text": "spreadplayers",
          "type": "keyword",
          "required": true
        },
        {
          "text": "x",
          "type": "rotation",
          "required": true
        },
        {
          "text": "z",
          "type": "rotation",
          "required": true
        },
        {
          "text": "spreadDistance",
          "type": "value",
          "required": true
        },
        {
          "text": "maxRange",
          "type": "value",
          "required": true
        },
        {
          "text": "victim",
          "type": "selector",
          "required": true
        }
      ]
    }
  ]
};
