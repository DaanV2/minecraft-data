// auto-generated

import { Command } from "./interface";

export const enchantCommand: Command = {
  "name": "enchant",
  "documentation": "Adds an enchantment to a player's selected item.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "enchant",
      "documentation": "Adds an enchantment to a player's selected item.",
      "parameters": [
        {
          "text": "enchant",
          "type": "keyword",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": true
        },
        {
          "text": "enchantmentName",
          "type": "enum:Enchant",
          "required": true
        },
        {
          "text": "level",
          "type": "integer",
          "required": false
        }
      ]
    },
    {
      "name": "enchant",
      "documentation": "Adds an enchantment to a player's selected item.",
      "parameters": [
        {
          "text": "enchant",
          "type": "keyword",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": true
        },
        {
          "text": "enchantmentId",
          "type": "integer",
          "required": true
        },
        {
          "text": "level",
          "type": "integer",
          "required": false
        }
      ]
    }
  ]
};
