// auto-generated

import { Command } from "./interface";

export const allowlistCommand: Command = {
  "name": "allowlist",
  "documentation": "Manages the server allowlist.",
  "permissionLevel": 4,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "whitelist",
      "documentation": "Manages the server allowlist.",
      "parameters": [
        {
          "text": "whitelist",
          "type": "keyword",
          "required": true
        },
        {
          "text": "action",
          "type": "enum:AllowListAction",
          "required": true
        },
        {
          "text": "name",
          "type": "player",
          "required": false
        }
      ]
    }
  ]
};
