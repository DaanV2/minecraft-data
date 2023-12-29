// auto-generated

import { Command } from "./interface";

export const titlerawCommand: Command = {
  "name": "titleraw",
  "documentation": "Controls screen titles with JSON messages.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "titleraw",
      "documentation": "Controls screen titles with JSON messages.",
      "parameters": [
        {
          "text": "titleraw",
          "type": "keyword",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": true
        },
        {
          "text": "clear",
          "type": "keyword",
          "required": true
        }
      ]
    },
    {
      "name": "titleraw",
      "documentation": "Controls screen titles with JSON messages.",
      "parameters": [
        {
          "text": "titleraw",
          "type": "keyword",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": true
        },
        {
          "text": "reset",
          "type": "keyword",
          "required": true
        }
      ]
    },
    {
      "name": "titleraw",
      "documentation": "Controls screen titles with JSON messages.",
      "parameters": [
        {
          "text": "titleraw",
          "type": "keyword",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": true
        },
        {
          "text": "titleLocation",
          "type": "enum:titlerawset",
          "required": true
        },
        {
          "text": "raw json titleText",
          "type": "json",
          "required": true
        }
      ]
    },
    {
      "name": "titleraw",
      "documentation": "Controls screen titles with JSON messages.",
      "parameters": [
        {
          "text": "titleraw",
          "type": "keyword",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": true
        },
        {
          "text": "times",
          "type": "keyword",
          "required": true
        },
        {
          "text": "fadeIn",
          "type": "integer",
          "required": true
        },
        {
          "text": "stay",
          "type": "integer",
          "required": true
        },
        {
          "text": "fadeOut",
          "type": "integer",
          "required": true
        }
      ]
    }
  ]
};
