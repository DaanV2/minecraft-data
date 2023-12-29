// auto-generated

import { Command } from "./interface";

export const changesettingCommand: Command = {
  "name": "changesetting",
  "documentation": "Changes a setting on the dedicated server while it's running.",
  "permissionLevel": 4,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "changesetting",
      "documentation": "Changes a setting on the dedicated server while it's running.",
      "parameters": [
        {
          "text": "changesetting",
          "type": "keyword",
          "required": true
        },
        {
          "text": "allow-cheats",
          "type": "keyword",
          "required": true
        },
        {
          "text": "value",
          "type": "boolean",
          "required": true
        }
      ]
    },
    {
      "name": "changesetting",
      "documentation": "Changes a setting on the dedicated server while it's running.",
      "parameters": [
        {
          "text": "changesetting",
          "type": "keyword",
          "required": true
        },
        {
          "text": "difficulty",
          "type": "keyword",
          "required": true
        },
        {
          "text": "value",
          "type": "enum:Difficulty",
          "required": true
        }
      ]
    },
    {
      "name": "changesetting",
      "documentation": "Changes a setting on the dedicated server while it's running.",
      "parameters": [
        {
          "text": "changesetting",
          "type": "keyword",
          "required": true
        },
        {
          "text": "difficulty",
          "type": "keyword",
          "required": true
        },
        {
          "text": "value",
          "type": "integer",
          "required": true
        }
      ]
    }
  ]
};
