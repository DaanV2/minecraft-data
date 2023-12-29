// auto-generated

import { Command } from "./interface";

export const locateCommand: Command = {
  "name": "locate",
  "documentation": "Displays the coordinates for the closest structure or biome of a given type.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "locate",
      "documentation": "Displays the coordinates for the closest structure or biome of a given type.",
      "parameters": [
        {
          "text": "locate",
          "type": "keyword",
          "required": true
        },
        {
          "text": "structure",
          "type": "keyword",
          "required": true
        },
        {
          "text": "structure",
          "type": "enum:Structure",
          "required": true
        },
        {
          "text": "useNewChunksOnly",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "name": "locate",
      "documentation": "Displays the coordinates for the closest structure or biome of a given type.",
      "parameters": [
        {
          "text": "locate",
          "type": "keyword",
          "required": true
        },
        {
          "text": "biome",
          "type": "keyword",
          "required": true
        },
        {
          "text": "biome",
          "type": "enum:Biome",
          "required": true
        }
      ]
    }
  ]
};
