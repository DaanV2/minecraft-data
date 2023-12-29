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
          "text": "position",
          "type": "unknown",
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
