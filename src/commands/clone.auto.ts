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
          "text": "begin x",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "begin y",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "begin z",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "end x",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "end y",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "end z",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "destination x",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "destination y",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "destination z",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "maskMode",
          "type": "enum:maskmode",
          "required": false
        },
        {
          "text": "cloneMode",
          "type": "enum:clonemode",
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
          "text": "begin x",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "begin y",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "begin z",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "end x",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "end y",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "end z",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "destination x",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "destination y",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "destination z",
          "type": "coordinate:integer",
          "required": true
        },
        {
          "text": "filtered",
          "type": "keyword",
          "required": true
        },
        {
          "text": "cloneMode",
          "type": "enum:clonemode",
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
          "required": false
        }
      ]
    }
  ]
};
