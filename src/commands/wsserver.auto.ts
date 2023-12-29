// auto-generated

import { Command } from "./interface";

export const wsserverCommand: Command = {
  "name": "wsserver",
  "documentation": "Attempts to connect to the websocket server on the provided URL.",
  "permissionLevel": 2,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "connect",
      "documentation": "Attempts to connect to the websocket server on the provided URL.",
      "parameters": [
        {
          "text": "connect",
          "type": "keyword",
          "required": true
        },
        {
          "text": "serverUri",
          "type": "json:rawtext",
          "required": true
        }
      ]
    }
  ]
};
