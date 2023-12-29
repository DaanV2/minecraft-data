// auto-generated

import { Command } from "./interface";

export const particleCommand: Command = {
  "name": "particle",
  "documentation": "Creates a particle emitter",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "particle",
      "documentation": "Creates a particle emitter",
      "parameters": [
        {
          "text": "particle",
          "type": "keyword",
          "required": true
        },
        {
          "text": "effect",
          "type": "player",
          "required": true
        },
        {
          "text": "position",
          "type": "unknown",
          "required": false
        }
      ]
    }
  ]
};
