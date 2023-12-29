// auto-generated

import { Command } from "./interface";

export const cloneCommand: Command = {
  "name": "clone",
  "documentation": "Clones blocks from one region to another.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "clone",
      "documentation": "Clones blocks from one region to another.",
      "parameters": [
        {
          "text": "clone",
          "type": "keyword",
          "required": true
        },
        {
          "text": "begin",
          "type": "unknown",
          "required": true
        },
        {
          "text": "end",
          "type": "unknown",
          "required": true
        },
        {
          "text": "destination",
          "type": "unknown",
          "required": true
        },
        {
          "text": "maskMode",
          "type": "enum:MaskMode",
          "required": false
        },
        {
          "text": "cloneMode",
          "type": "enum:CloneMode",
          "required": false
        }
      ]
    },
    {
      "name": "clone",
      "documentation": "Clones blocks from one region to another.",
      "parameters": [
        {
          "text": "clone",
          "type": "keyword",
          "required": true
        },
        {
          "text": "begin",
          "type": "unknown",
          "required": true
        },
        {
          "text": "end",
          "type": "unknown",
          "required": true
        },
        {
          "text": "destination",
          "type": "unknown",
          "required": true
        },
        {
          "text": "filtered",
          "type": "keyword",
          "required": true
        },
        {
          "text": "cloneMode",
          "type": "enum:CloneMode",
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
