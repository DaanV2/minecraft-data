// auto-generated

import { Command } from "./interface";

export const testforblockCommand: Command = {
  "name": "testforblock",
  "documentation": "Tests whether a certain block is in a specific location.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "testforblock",
      "documentation": "Tests whether a certain block is in a specific location.",
      "parameters": [
        {
          "text": "testforblock",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position",
          "type": "unknown",
          "required": true
        },
        {
          "text": "tileName",
          "type": "enum:Block",
          "required": true
        },
        {
          "text": "blockStates",
          "type": "unknown",
          "required": false
        }
      ]
    }
  ]
};
