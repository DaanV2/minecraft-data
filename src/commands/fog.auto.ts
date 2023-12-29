// auto-generated

import { Command } from "./interface";

export const fogCommand: Command = {
  "name": "fog",
  "documentation": "Add or remove fog settings file",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "fog",
      "documentation": "Add or remove fog settings file",
      "parameters": [
        {
          "text": "fog",
          "type": "keyword",
          "required": true
        },
        {
          "text": "victim",
          "type": "selector",
          "required": true
        },
        {
          "text": "push",
          "type": "keyword",
          "required": true
        },
        {
          "text": "fogId",
          "type": "player",
          "required": true
        },
        {
          "text": "userProvidedId",
          "type": "player",
          "required": true
        }
      ]
    },
    {
      "name": "fog",
      "documentation": "Add or remove fog settings file",
      "parameters": [
        {
          "text": "fog",
          "type": "keyword",
          "required": true
        },
        {
          "text": "victim",
          "type": "selector",
          "required": true
        },
        {
          "text": "mode",
          "type": "unknown",
          "required": true
        },
        {
          "text": "userProvidedId",
          "type": "player",
          "required": true
        }
      ]
    }
  ]
};
