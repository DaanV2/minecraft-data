// auto-generated

import { Command } from "./interface";

export const clearCommand: Command = {
  "name": "clear",
  "documentation": "Clears items from player inventory.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "clear",
      "documentation": "Clears items from player inventory.",
      "parameters": [
        {
          "text": "clear",
          "type": "keyword",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": false
        },
        {
          "text": "itemName",
          "type": "enum:item",
          "required": false
        },
        {
          "text": "data",
          "type": "integer",
          "required": false
        },
        {
          "text": "maxCount",
          "type": "integer",
          "required": false
        }
      ]
    }
  ]
};
