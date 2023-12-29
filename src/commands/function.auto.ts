// auto-generated

import { Command } from "./interface";

export const functionCommand: Command = {
  "name": "function",
  "documentation": "Runs commands found in the corresponding function file.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "function",
      "documentation": "Runs commands found in the corresponding function file.",
      "parameters": [
        {
          "text": "function",
          "type": "keyword",
          "required": true
        },
        {
          "text": "name",
          "type": "mcfunction",
          "required": true
        }
      ]
    }
  ]
};
