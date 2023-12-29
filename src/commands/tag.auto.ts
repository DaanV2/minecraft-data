// auto-generated

import { Command } from "./interface";

export const tagCommand: Command = {
  "name": "tag",
  "documentation": "Manages tags stored in entities.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "tag",
      "documentation": "Manages tags stored in entities.",
      "parameters": [
        {
          "text": "tag",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "selector",
          "required": true,
          "options": {
            "wildcard": true
          }
        },
        {
          "text": "action",
          "type": "enum:TagChangeAction",
          "required": true
        },
        {
          "text": "name",
          "type": "unknown",
          "required": true
        }
      ]
    },
    {
      "name": "tag",
      "documentation": "Manages tags stored in entities.",
      "parameters": [
        {
          "text": "tag",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "selector",
          "required": true,
          "options": {
            "wildcard": true
          }
        },
        {
          "text": "list",
          "type": "keyword",
          "required": true
        }
      ]
    }
  ]
};
