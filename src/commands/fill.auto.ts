// auto-generated

import { Command } from "./interface";

export const fillCommand: Command = {
  "name": "fill",
  "documentation": "Fills all or parts of a region with a specific block.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "fill",
      "documentation": "Fills all or parts of a region with a specific block.",
      "parameters": [
        {
          "text": "fill",
          "type": "keyword",
          "required": true
        },
        {
          "text": "from",
          "type": "unknown",
          "required": true
        },
        {
          "text": "to",
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
          "type": "enum:FillMode",
          "required": false
        }
      ]
    },
    {
      "name": "fill",
      "documentation": "Fills all or parts of a region with a specific block.",
      "parameters": [
        {
          "text": "fill",
          "type": "keyword",
          "required": true
        },
        {
          "text": "from",
          "type": "unknown",
          "required": true
        },
        {
          "text": "to",
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
          "type": "enum:FillMode",
          "required": false
        }
      ]
    },
    {
      "name": "fill",
      "documentation": "Fills all or parts of a region with a specific block.",
      "parameters": [
        {
          "text": "fill",
          "type": "keyword",
          "required": true
        },
        {
          "text": "from",
          "type": "unknown",
          "required": true
        },
        {
          "text": "to",
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
          "text": "replace",
          "type": "keyword",
          "required": true
        },
        {
          "text": "replaceTileName",
          "type": "enum:Block",
          "required": false
        },
        {
          "text": "replaceBlockStates",
          "type": "unknown",
          "required": false
        }
      ]
    },
    {
      "name": "fill",
      "documentation": "Fills all or parts of a region with a specific block.",
      "parameters": [
        {
          "text": "fill",
          "type": "keyword",
          "required": true
        },
        {
          "text": "from",
          "type": "unknown",
          "required": true
        },
        {
          "text": "to",
          "type": "unknown",
          "required": true
        },
        {
          "text": "tileName",
          "type": "enum:Block",
          "required": true
        },
        {
          "text": "replace",
          "type": "keyword",
          "required": true
        },
        {
          "text": "replaceTileName",
          "type": "enum:Block",
          "required": false
        },
        {
          "text": "replaceBlockStates",
          "type": "unknown",
          "required": false
        }
      ]
    }
  ]
};
