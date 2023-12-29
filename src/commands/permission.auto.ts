// auto-generated

import { Command } from "./interface";

export const permissionCommand: Command = {
  "name": "permission",
  "documentation": "Reloads and applies permissions.",
  "permissionLevel": 4,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "ops",
      "documentation": "Reloads and applies permissions.",
      "parameters": [
        {
          "text": "ops",
          "type": "keyword",
          "required": true
        },
        {
          "text": "action",
          "type": "enum:PermissionsAction",
          "required": true
        }
      ]
    }
  ]
};
