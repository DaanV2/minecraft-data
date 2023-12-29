// auto-generated

import { Command } from "./interface";

export const opsCommand: Command = {
  "name": "ops",
  "documentation": "Command alias: ops\nReloads and applies permissions.",
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
