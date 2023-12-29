// auto-generated

import { Command } from "./interface";

export const xpCommand: Command = {
  "name": "xp",
  "documentation": "Adds or removes player experience.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "xp",
      "documentation": "Adds or removes player experience.",
      "parameters": [
        {
          "text": "xp",
          "type": "keyword",
          "required": true
        },
        {
          "text": "amount",
          "type": "integer",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": false
        }
      ]
    },
    {
      "name": "xp",
      "documentation": "Adds or removes player experience.",
      "parameters": [
        {
          "text": "xp",
          "type": "keyword",
          "required": true
        },
        {
          "text": "amount",
          "type": "unknown",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": false
        }
      ]
    }
  ]
};
