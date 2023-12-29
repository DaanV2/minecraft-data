// auto-generated

import { Command } from "./interface";

export const effectCommand: Command = {
  "name": "effect",
  "documentation": "Add or remove status effects.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "effect",
      "documentation": "Add or remove status effects.",
      "parameters": [
        {
          "text": "effect",
          "type": "keyword",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": true
        },
        {
          "text": "clear",
          "type": "keyword",
          "required": true
        }
      ]
    },
    {
      "name": "effect",
      "documentation": "Add or remove status effects.",
      "parameters": [
        {
          "text": "effect",
          "type": "keyword",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": true
        },
        {
          "text": "effect",
          "type": "enum:Effect",
          "required": true
        },
        {
          "text": "seconds",
          "type": "integer",
          "required": false
        },
        {
          "text": "amplifier",
          "type": "integer",
          "required": false
        },
        {
          "text": "hideParticles",
          "type": "boolean",
          "required": false
        }
      ]
    }
  ]
};
