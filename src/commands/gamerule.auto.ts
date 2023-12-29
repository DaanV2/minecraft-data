// auto-generated

import { Command } from "./interface";

export const gameruleCommand: Command = {
  "name": "gamerule",
  "documentation": "Sets or queries a game rule value.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": false,
  "syntaxes": [
    {
      "name": "gamerule",
      "documentation": "Sets or queries a game rule value.",
      "parameters": [
        {
          "text": "gamerule",
          "type": "keyword",
          "required": true
        }
      ]
    },
    {
      "name": "gamerule",
      "documentation": "Sets or queries a game rule value.",
      "parameters": [
        {
          "text": "gamerule",
          "type": "keyword",
          "required": true
        },
        {
          "text": "rule",
          "type": "enum:BoolGameRule",
          "required": true
        },
        {
          "text": "value",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "name": "gamerule",
      "documentation": "Sets or queries a game rule value.",
      "parameters": [
        {
          "text": "gamerule",
          "type": "keyword",
          "required": true
        },
        {
          "text": "rule",
          "type": "enum:IntGameRule",
          "required": true
        },
        {
          "text": "value",
          "type": "integer",
          "required": false
        }
      ]
    }
  ]
};
