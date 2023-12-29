// auto-generated

import { Command } from "./interface";

export const setblockCommand: Command = {
  "name": "setblock",
  "documentation": "Changes a block to another block.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "setblock",
      "documentation": "Changes a block to another block.",
      "parameters": [
        {
          "text": "setblock",
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
          "required": true
        },
        {
          "text": "oldBlockHandling",
          "type": "enum:SetBlockMode",
          "required": false
        }
      ]
    },
    {
      "name": "setblock",
      "documentation": "Changes a block to another block.",
      "parameters": [
        {
          "text": "setblock",
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
          "text": "oldBlockHandling",
          "type": "enum:SetBlockMode",
          "required": false
        }
      ]
    }
  ]
};
