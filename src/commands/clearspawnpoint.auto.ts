// auto-generated

import { Command } from "./interface";

export const clearspawnpointCommand: Command = {
  "name": "clearspawnpoint",
  "documentation": "Removes the spawn point for a player.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "clearspawnpoint",
      "documentation": "Removes the spawn point for a player.",
      "parameters": [
        {
          "text": "clearspawnpoint",
          "type": "keyword",
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
