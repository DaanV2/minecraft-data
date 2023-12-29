// auto-generated

import { Command } from "./interface";

export const weatherCommand: Command = {
  "name": "weather",
  "documentation": "Sets the weather.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "weather",
      "documentation": "Sets the weather.",
      "parameters": [
        {
          "text": "weather",
          "type": "keyword",
          "required": true
        },
        {
          "text": "type",
          "type": "enum:WeatherType",
          "required": true
        },
        {
          "text": "duration",
          "type": "integer",
          "required": false
        }
      ]
    },
    {
      "name": "weather",
      "documentation": "Sets the weather.",
      "parameters": [
        {
          "text": "weather",
          "type": "keyword",
          "required": true
        },
        {
          "text": "query",
          "type": "keyword",
          "required": true
        }
      ]
    }
  ]
};
