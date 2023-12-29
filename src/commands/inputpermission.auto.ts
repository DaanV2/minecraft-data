// auto-generated

import { Command } from "./interface";

export const inputpermissionCommand: Command = {
  "name": "inputpermission",
  "documentation": "Sets whether or not a player's input can affect their character.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "inputpermission",
      "documentation": "Sets whether or not a player's input can affect their character.",
      "parameters": [
        {
          "text": "inputpermission",
          "type": "keyword",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "targets",
          "type": "selector",
          "required": true
        },
        {
          "text": "permission",
          "type": "enum:permission",
          "required": true
        },
        {
          "text": "state",
          "type": "enum:state",
          "required": true
        }
      ]
    },
    {
      "name": "inputpermission",
      "documentation": "Sets whether or not a player's input can affect their character.",
      "parameters": [
        {
          "text": "inputpermission",
          "type": "keyword",
          "required": true
        },
        {
          "text": "query",
          "type": "keyword",
          "required": true
        },
        {
          "text": "targets",
          "type": "selector",
          "required": true
        },
        {
          "text": "permission",
          "type": "enum:permission",
          "required": true
        },
        {
          "text": "state",
          "type": "enum:state",
          "required": false
        }
      ]
    }
  ]
};
