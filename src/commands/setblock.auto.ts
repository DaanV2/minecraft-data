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
          "text": "position x",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "position y",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "position z",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "tileName",
          "type": "enum:block",
          "required": true
        },
        {
          "text": "blockStates",
          "type": "block_states",
          "required": true
        },
        {
          "text": "oldBlockHandling",
          "type": "enum:setblockmode",
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
          "text": "position x",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "position y",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "position z",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "tileName",
          "type": "enum:block",
          "required": true
        },
        {
          "text": "oldBlockHandling",
          "type": "enum:setblockmode",
          "required": false
        }
      ]
    }
  ]
};
