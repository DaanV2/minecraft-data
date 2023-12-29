// auto-generated

import { Command } from "./interface";

export const teleportCommand: Command = {
  "name": "teleport",
  "documentation": "Teleports entities (players, mobs, etc.).",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "tp",
      "documentation": "Teleports entities (players, mobs, etc.).",
      "parameters": [
        {
          "text": "tp",
          "type": "keyword",
          "required": true
        },
        {
          "text": "destination x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "destination y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "destination z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "checkForBlocks",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "name": "tp",
      "documentation": "Teleports entities (players, mobs, etc.).",
      "parameters": [
        {
          "text": "tp",
          "type": "keyword",
          "required": true
        },
        {
          "text": "destination x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "destination y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "destination z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "yRot",
          "type": "rotation",
          "required": false
        },
        {
          "text": "xRot",
          "type": "rotation",
          "required": false
        },
        {
          "text": "checkForBlocks",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "name": "tp",
      "documentation": "Teleports entities (players, mobs, etc.).",
      "parameters": [
        {
          "text": "tp",
          "type": "keyword",
          "required": true
        },
        {
          "text": "destination x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "destination y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "destination z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "facing",
          "type": "keyword",
          "required": true
        },
        {
          "text": "lookAtPosition x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "lookAtPosition y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "lookAtPosition z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "checkForBlocks",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "name": "tp",
      "documentation": "Teleports entities (players, mobs, etc.).",
      "parameters": [
        {
          "text": "tp",
          "type": "keyword",
          "required": true
        },
        {
          "text": "destination x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "destination y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "destination z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "facing",
          "type": "keyword",
          "required": true
        },
        {
          "text": "lookAtEntity",
          "type": "selector",
          "required": true
        },
        {
          "text": "checkForBlocks",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "name": "tp",
      "documentation": "Teleports entities (players, mobs, etc.).",
      "parameters": [
        {
          "text": "tp",
          "type": "keyword",
          "required": true
        },
        {
          "text": "victim",
          "type": "selector",
          "required": true
        },
        {
          "text": "destination x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "destination y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "destination z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "yRot",
          "type": "rotation",
          "required": false
        },
        {
          "text": "xRot",
          "type": "rotation",
          "required": false
        },
        {
          "text": "checkForBlocks",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "name": "tp",
      "documentation": "Teleports entities (players, mobs, etc.).",
      "parameters": [
        {
          "text": "tp",
          "type": "keyword",
          "required": true
        },
        {
          "text": "victim",
          "type": "selector",
          "required": true
        },
        {
          "text": "destination x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "destination y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "destination z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "checkForBlocks",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "name": "tp",
      "documentation": "Teleports entities (players, mobs, etc.).",
      "parameters": [
        {
          "text": "tp",
          "type": "keyword",
          "required": true
        },
        {
          "text": "victim",
          "type": "selector",
          "required": true
        },
        {
          "text": "destination x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "destination y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "destination z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "facing",
          "type": "keyword",
          "required": true
        },
        {
          "text": "lookAtPosition x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "lookAtPosition y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "lookAtPosition z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "checkForBlocks",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "name": "tp",
      "documentation": "Teleports entities (players, mobs, etc.).",
      "parameters": [
        {
          "text": "tp",
          "type": "keyword",
          "required": true
        },
        {
          "text": "victim",
          "type": "selector",
          "required": true
        },
        {
          "text": "destination x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "destination y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "destination z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "facing",
          "type": "keyword",
          "required": true
        },
        {
          "text": "lookAtEntity",
          "type": "selector",
          "required": true
        },
        {
          "text": "checkForBlocks",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "name": "tp",
      "documentation": "Teleports entities (players, mobs, etc.).",
      "parameters": [
        {
          "text": "tp",
          "type": "keyword",
          "required": true
        },
        {
          "text": "destination",
          "type": "selector",
          "required": true
        }
      ]
    },
    {
      "name": "tp",
      "documentation": "Teleports entities (players, mobs, etc.).",
      "parameters": [
        {
          "text": "tp",
          "type": "keyword",
          "required": true
        },
        {
          "text": "victim",
          "type": "selector",
          "required": true
        },
        {
          "text": "destination",
          "type": "selector",
          "required": true
        },
        {
          "text": "checkForBlocks",
          "type": "boolean",
          "required": false
        }
      ]
    }
  ]
};
