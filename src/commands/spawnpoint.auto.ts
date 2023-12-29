// auto-generated

import { Command } from "./interface";

export const spawnpointCommand: Command = {
  "name": "spawnpoint",
  "documentation": "Sets the spawn point for a player.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "spawnpoint",
      "documentation": "Sets the spawn point for a player.",
      "parameters": [
        {
          "text": "spawnpoint",
          "type": "keyword",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": false
        },
        {
          "text": "spawnPos",
          "type": "unknown",
          "required": false
        }
      ]
    }
  ]
};
