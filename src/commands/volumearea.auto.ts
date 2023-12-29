// auto-generated

import { Command } from "./interface";

export const volumeareaCommand: Command = {
  "name": "volumearea",
  "documentation": "Add, remove, or list volumes in the current dimension.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "volumearea",
      "documentation": "Add, remove, or list volumes in the current dimension.",
      "parameters": [
        {
          "text": "volumearea",
          "type": "keyword",
          "required": true
        },
        {
          "text": "add",
          "type": "keyword",
          "required": true
        },
        {
          "text": "identifier",
          "type": "player",
          "required": true
        },
        {
          "text": "from x",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "from y",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "from z",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "to x",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "to y",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "to z",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "name",
          "type": "player",
          "required": false
        }
      ]
    },
    {
      "name": "volumearea",
      "documentation": "Add, remove, or list volumes in the current dimension.",
      "parameters": [
        {
          "text": "volumearea",
          "type": "keyword",
          "required": true
        },
        {
          "text": "remove",
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
      "name": "volumearea",
      "documentation": "Add, remove, or list volumes in the current dimension.",
      "parameters": [
        {
          "text": "volumearea",
          "type": "keyword",
          "required": true
        },
        {
          "text": "remove",
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
        }
      ]
    },
    {
      "name": "volumearea",
      "documentation": "Add, remove, or list volumes in the current dimension.",
      "parameters": [
        {
          "text": "volumearea",
          "type": "keyword",
          "required": true
        },
        {
          "text": "remove_all",
          "type": "keyword",
          "required": true
        }
      ]
    },
    {
      "name": "volumearea",
      "documentation": "Add, remove, or list volumes in the current dimension.",
      "parameters": [
        {
          "text": "volumearea",
          "type": "keyword",
          "required": true
        },
        {
          "text": "list",
          "type": "keyword",
          "required": true
        },
        {
          "text": "all-dimensions",
          "type": "keyword",
          "required": false
        }
      ]
    }
  ]
};
