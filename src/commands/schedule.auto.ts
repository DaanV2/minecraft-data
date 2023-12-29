// auto-generated

import { Command } from "./interface";

export const scheduleCommand: Command = {
  "name": "schedule",
  "documentation": "Schedules an action to be executed once an area is loaded, or after a certain amount of time.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "schedule",
      "documentation": "Schedules an action to be executed once an area is loaded, or after a certain amount of time.",
      "parameters": [
        {
          "text": "schedule",
          "type": "keyword",
          "required": true
        },
        {
          "text": "on_area_loaded",
          "type": "keyword",
          "required": true
        },
        {
          "text": "add",
          "type": "keyword",
          "required": true
        },
        {
          "text": "from",
          "type": "unknown",
          "required": true
        },
        {
          "text": "to",
          "type": "unknown",
          "required": true
        },
        {
          "text": "function",
          "type": "mcfunction",
          "required": true
        }
      ]
    },
    {
      "name": "schedule",
      "documentation": "Schedules an action to be executed once an area is loaded, or after a certain amount of time.",
      "parameters": [
        {
          "text": "schedule",
          "type": "keyword",
          "required": true
        },
        {
          "text": "on_area_loaded",
          "type": "keyword",
          "required": true
        },
        {
          "text": "add",
          "type": "keyword",
          "required": true
        },
        {
          "text": "circle",
          "type": "keyword",
          "required": true
        },
        {
          "text": "center",
          "type": "unknown",
          "required": true
        },
        {
          "text": "radius",
          "type": "integer",
          "required": true
        },
        {
          "text": "function",
          "type": "mcfunction",
          "required": true
        }
      ]
    },
    {
      "name": "schedule",
      "documentation": "Schedules an action to be executed once an area is loaded, or after a certain amount of time.",
      "parameters": [
        {
          "text": "schedule",
          "type": "keyword",
          "required": true
        },
        {
          "text": "on_area_loaded",
          "type": "keyword",
          "required": true
        },
        {
          "text": "add",
          "type": "keyword",
          "required": true
        },
        {
          "text": "tickingarea",
          "type": "keyword",
          "required": true
        },
        {
          "text": "name",
          "type": "player",
          "required": true
        },
        {
          "text": "function",
          "type": "mcfunction",
          "required": true
        }
      ]
    }
  ]
};
