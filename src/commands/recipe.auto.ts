// auto-generated

import { Command } from "./interface";

export const recipeCommand: Command = {
  "name": "recipe",
  "documentation": "Unlocks recipe in the recipe book for a player.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "recipe",
      "documentation": "Unlocks recipe in the recipe book for a player.",
      "parameters": [
        {
          "text": "recipe",
          "type": "keyword",
          "required": true
        },
        {
          "text": "give",
          "type": "keyword",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": true
        },
        {
          "text": "recipe",
          "type": "enum:unlockablerecipevalues",
          "required": true
        }
      ]
    },
    {
      "name": "recipe",
      "documentation": "Unlocks recipe in the recipe book for a player.",
      "parameters": [
        {
          "text": "recipe",
          "type": "keyword",
          "required": true
        },
        {
          "text": "take",
          "type": "keyword",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": true
        },
        {
          "text": "recipe",
          "type": "enum:unlockablerecipevalues",
          "required": true
        }
      ]
    }
  ]
};
