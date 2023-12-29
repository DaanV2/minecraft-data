// auto-generated

import { Command } from "./interface";

export const projectCommand: Command = {
  "name": "project",
  "documentation": "Manipulate the currently loaded project",
  "permissionLevel": 1,
  "requiresCheatsEnabled": false,
  "syntaxes": [
    {
      "name": "project",
      "documentation": "Manipulate the currently loaded project",
      "parameters": [
        {
          "text": "project",
          "type": "keyword",
          "required": true
        },
        {
          "text": "export",
          "type": "keyword",
          "required": true
        },
        {
          "text": "exportType",
          "type": "enum:exporttypes",
          "required": true
        }
      ]
    }
  ]
};
