// auto-generated

import { Command } from "./interface";

export const transferCommand: Command = {
  "name": "transfer",
  "documentation": "Transfers a player to another server.",
  "permissionLevel": 4,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "transfer",
      "documentation": "Transfers a player to another server.",
      "parameters": [
        {
          "text": "transfer",
          "type": "keyword",
          "required": true
        },
        {
          "text": "pfidOrMSA",
          "type": "player",
          "required": true
        },
        {
          "text": "server",
          "type": "player",
          "required": true
        },
        {
          "text": "port",
          "type": "integer",
          "required": true
        }
      ]
    }
  ]
};
