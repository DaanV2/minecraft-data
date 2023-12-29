// auto-generated

import { Command } from "./interface";

export const simulationtypeCommand: Command = {
  "name": "simulationtype",
  "documentation": "Changes simulation type for editor mode",
  "permissionLevel": 1,
  "requiresCheatsEnabled": false,
  "syntaxes": [
    {
      "name": "simulationtype",
      "documentation": "Changes simulation type for editor mode",
      "parameters": [
        {
          "text": "simulationtype",
          "type": "keyword",
          "required": true
        },
        {
          "text": "state",
          "type": "enum:simulationtypeenum",
          "required": true
        }
      ]
    }
  ]
};
