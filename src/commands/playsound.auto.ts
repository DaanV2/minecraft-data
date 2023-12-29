// auto-generated

import { Command } from "./interface";

export const playsoundCommand: Command = {
  "name": "playsound",
  "documentation": "Plays a sound.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "playsound",
      "documentation": "Plays a sound.",
      "parameters": [
        {
          "text": "playsound",
          "type": "keyword",
          "required": true
        },
        {
          "text": "sound",
          "type": "player",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": false
        },
        {
          "text": "position",
          "type": "unknown",
          "required": false
        },
        {
          "text": "volume",
          "type": "value",
          "required": false
        },
        {
          "text": "pitch",
          "type": "value",
          "required": false
        },
        {
          "text": "minimumVolume",
          "type": "value",
          "required": false
        }
      ]
    }
  ]
};
