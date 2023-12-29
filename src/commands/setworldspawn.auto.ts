// auto-generated

import { Command } from "./interface";

export const setworldspawnCommand: Command = {
  "name": "setworldspawn",
  "documentation": "Sets the world spawn.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "setworldspawn",
      "documentation": "Sets the world spawn.",
      "parameters": [
        {
          "text": "setworldspawn",
          "type": "keyword",
          "required": true
        },
        {
          "text": "spawnPoint x",
          "type": "coordinate:float",
          "required": false
        },
        {
          "text": "spawnPoint y",
          "type": "coordinate:float",
          "required": false
        },
        {
          "text": "spawnPoint z",
          "type": "coordinate:float",
          "required": false
        }
      ]
    }
  ]
};
