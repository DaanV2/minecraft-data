// auto-generated

import { Command } from "./interface";

export const testforblocksCommand: Command = {
  "name": "testforblocks",
  "documentation": "Tests whether the blocks in two regions match.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "testforblocks",
      "documentation": "Tests whether the blocks in two regions match.",
      "parameters": [
        {
          "text": "testforblocks",
          "type": "keyword",
          "required": true
        },
        {
          "text": "begin",
          "type": "unknown",
          "required": true
        },
        {
          "text": "end",
          "type": "unknown",
          "required": true
        },
        {
          "text": "destination",
          "type": "unknown",
          "required": true
        },
        {
          "text": "mode",
          "type": "enum:TestForBlocksMode",
          "required": false
        }
      ]
    }
  ]
};
