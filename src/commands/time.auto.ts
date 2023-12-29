// auto-generated

import { Command } from "./interface";

export const timeCommand: Command = {
  "name": "time",
  "documentation": "Changes or queries the world's game time.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "time",
      "documentation": "Changes or queries the world's game time.",
      "parameters": [
        {
          "text": "time",
          "type": "keyword",
          "required": true
        },
        {
          "text": "add",
          "type": "keyword",
          "required": true
        },
        {
          "text": "amount",
          "type": "integer",
          "required": true
        }
      ]
    },
    {
      "name": "time",
      "documentation": "Changes or queries the world's game time.",
      "parameters": [
        {
          "text": "time",
          "type": "keyword",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "amount",
          "type": "integer",
          "required": true
        }
      ]
    },
    {
      "name": "time",
      "documentation": "Changes or queries the world's game time.",
      "parameters": [
        {
          "text": "time",
          "type": "keyword",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "time",
          "type": "enum:TimeSpec",
          "required": true
        }
      ]
    },
    {
      "name": "time",
      "documentation": "Changes or queries the world's game time.",
      "parameters": [
        {
          "text": "time",
          "type": "keyword",
          "required": true
        },
        {
          "text": "query",
          "type": "keyword",
          "required": true
        },
        {
          "text": "time",
          "type": "enum:TimeQuery",
          "required": true
        }
      ]
    }
  ]
};
