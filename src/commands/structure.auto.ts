// auto-generated

import { Command } from "./interface";

export const structureCommand: Command = {
  "name": "structure",
  "documentation": "Saves or loads a structure in the world.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "structure",
      "documentation": "Saves or loads a structure in the world.",
      "parameters": [
        {
          "text": "structure",
          "type": "keyword",
          "required": true
        },
        {
          "text": "save",
          "type": "keyword",
          "required": true
        },
        {
          "text": "name",
          "type": "player",
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
          "text": "saveMode",
          "type": "enum:StructureSaveMode",
          "required": false
        }
      ]
    },
    {
      "name": "structure",
      "documentation": "Saves or loads a structure in the world.",
      "parameters": [
        {
          "text": "structure",
          "type": "keyword",
          "required": true
        },
        {
          "text": "save",
          "type": "keyword",
          "required": true
        },
        {
          "text": "name",
          "type": "player",
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
          "text": "includeEntities",
          "type": "boolean",
          "required": false
        },
        {
          "text": "saveMode",
          "type": "enum:StructureSaveMode",
          "required": false
        },
        {
          "text": "includeBlocks",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "name": "structure",
      "documentation": "Saves or loads a structure in the world.",
      "parameters": [
        {
          "text": "structure",
          "type": "keyword",
          "required": true
        },
        {
          "text": "delete",
          "type": "keyword",
          "required": true
        },
        {
          "text": "name",
          "type": "player",
          "required": true
        }
      ]
    },
    {
      "name": "structure",
      "documentation": "Saves or loads a structure in the world.",
      "parameters": [
        {
          "text": "structure",
          "type": "keyword",
          "required": true
        },
        {
          "text": "load",
          "type": "keyword",
          "required": true
        },
        {
          "text": "name",
          "type": "player",
          "required": true
        },
        {
          "text": "to",
          "type": "unknown",
          "required": true
        },
        {
          "text": "rotation",
          "type": "enum:Rotation",
          "required": false
        },
        {
          "text": "mirror",
          "type": "enum:Mirror",
          "required": false
        },
        {
          "text": "includeEntities",
          "type": "boolean",
          "required": false
        },
        {
          "text": "includeBlocks",
          "type": "boolean",
          "required": false
        },
        {
          "text": "waterlogged",
          "type": "boolean",
          "required": false
        },
        {
          "text": "integrity",
          "type": "value",
          "required": false
        },
        {
          "text": "seed",
          "type": "player",
          "required": false
        }
      ]
    },
    {
      "name": "structure",
      "documentation": "Saves or loads a structure in the world.",
      "parameters": [
        {
          "text": "structure",
          "type": "keyword",
          "required": true
        },
        {
          "text": "load",
          "type": "keyword",
          "required": true
        },
        {
          "text": "name",
          "type": "player",
          "required": true
        },
        {
          "text": "to",
          "type": "unknown",
          "required": true
        },
        {
          "text": "rotation",
          "type": "enum:Rotation",
          "required": false
        },
        {
          "text": "mirror",
          "type": "enum:Mirror",
          "required": false
        },
        {
          "text": "animationMode",
          "type": "enum:StructureAnimationMode",
          "required": false
        },
        {
          "text": "animationSeconds",
          "type": "value",
          "required": false
        },
        {
          "text": "includeEntities",
          "type": "boolean",
          "required": false
        },
        {
          "text": "includeBlocks",
          "type": "boolean",
          "required": false
        },
        {
          "text": "waterlogged",
          "type": "boolean",
          "required": false
        },
        {
          "text": "integrity",
          "type": "value",
          "required": false
        },
        {
          "text": "seed",
          "type": "player",
          "required": false
        }
      ]
    }
  ]
};
