// auto-generated

import { Command } from "./interface";

export const gamemodeCommand: Command = {
  "name": "gamemode",
  "documentation": "Sets a player's game mode.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "gamemode",
      "documentation": "Sets a player's game mode.",
      "parameters": [
        {
          "text": "gamemode",
          "type": "keyword",
          "required": true
        },
        {
          "text": "gameMode",
          "type": "enum:gamemode",
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
      "name": "gamemode",
      "documentation": "Sets a player's game mode.",
      "parameters": [
        {
          "text": "gamemode",
          "type": "keyword",
          "required": true
        },
        {
          "text": "gameMode",
          "type": "integer",
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
