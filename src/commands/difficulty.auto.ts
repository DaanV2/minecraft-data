// auto-generated

import { Command } from "./interface";

export const difficultyCommand: Command = {
  "name": "difficulty",
  "documentation": "Sets the difficulty level.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "difficulty",
      "documentation": "Sets the difficulty level.",
      "parameters": [
        {
          "text": "difficulty",
          "type": "keyword",
          "required": true
        },
        {
          "text": "difficulty",
          "type": "enum:difficulty",
          "required": true
        }
      ]
    },
    {
      "name": "difficulty",
      "documentation": "Sets the difficulty level.",
      "parameters": [
        {
          "text": "difficulty",
          "type": "keyword",
          "required": true
        },
        {
          "text": "difficulty",
          "type": "integer",
          "required": true
        }
      ]
    }
  ]
};
