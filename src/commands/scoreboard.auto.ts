// auto-generated

import { Command } from "./interface";

export const scoreboardCommand: Command = {
  "name": "scoreboard",
  "documentation": "Tracks and displays scores for various objectives.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "scoreboard",
      "documentation": "Tracks and displays scores for various objectives.",
      "parameters": [
        {
          "text": "scoreboard",
          "type": "keyword",
          "required": true
        },
        {
          "text": "objectives",
          "type": "keyword",
          "required": true
        },
        {
          "text": "add",
          "type": "keyword",
          "required": true
        },
        {
          "text": "objective",
          "type": "scoreboard:objective",
          "required": true
        },
        {
          "text": "dummy",
          "type": "keyword",
          "required": true
        },
        {
          "text": "displayName",
          "type": "player",
          "required": false
        }
      ]
    },
    {
      "name": "scoreboard",
      "documentation": "Tracks and displays scores for various objectives.",
      "parameters": [
        {
          "text": "scoreboard",
          "type": "keyword",
          "required": true
        },
        {
          "text": "objectives",
          "type": "keyword",
          "required": true
        },
        {
          "text": "remove",
          "type": "keyword",
          "required": true
        },
        {
          "text": "objective",
          "type": "scoreboard:objective",
          "required": true
        }
      ]
    },
    {
      "name": "scoreboard",
      "documentation": "Tracks and displays scores for various objectives.",
      "parameters": [
        {
          "text": "scoreboard",
          "type": "keyword",
          "required": true
        },
        {
          "text": "objectives",
          "type": "keyword",
          "required": true
        },
        {
          "text": "list",
          "type": "keyword",
          "required": true
        }
      ]
    },
    {
      "name": "scoreboard",
      "documentation": "Tracks and displays scores for various objectives.",
      "parameters": [
        {
          "text": "scoreboard",
          "type": "keyword",
          "required": true
        },
        {
          "text": "objectives",
          "type": "keyword",
          "required": true
        },
        {
          "text": "setdisplay",
          "type": "keyword",
          "required": true
        },
        {
          "text": "displaySlot",
          "type": "enum:ScoreboardDisplaySlotSortable",
          "required": true
        },
        {
          "text": "objective",
          "type": "scoreboard:objective",
          "required": false
        },
        {
          "text": "sortOrder",
          "type": "enum:ScoreboardSortOrder",
          "required": false
        }
      ]
    },
    {
      "name": "scoreboard",
      "documentation": "Tracks and displays scores for various objectives.",
      "parameters": [
        {
          "text": "scoreboard",
          "type": "keyword",
          "required": true
        },
        {
          "text": "objectives",
          "type": "keyword",
          "required": true
        },
        {
          "text": "setdisplay",
          "type": "keyword",
          "required": true
        },
        {
          "text": "belowname",
          "type": "keyword",
          "required": true
        },
        {
          "text": "objective",
          "type": "scoreboard:objective",
          "required": false
        }
      ]
    },
    {
      "name": "scoreboard",
      "documentation": "Tracks and displays scores for various objectives.",
      "parameters": [
        {
          "text": "scoreboard",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "keyword",
          "required": true
        },
        {
          "text": "list",
          "type": "keyword",
          "required": true
        },
        {
          "text": "playername",
          "type": "selector",
          "required": false,
          "options": {
            "wildcard": true
          }
        }
      ]
    },
    {
      "name": "scoreboard",
      "documentation": "Tracks and displays scores for various objectives.",
      "parameters": [
        {
          "text": "scoreboard",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "keyword",
          "required": true
        },
        {
          "text": "reset",
          "type": "keyword",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": true,
          "options": {
            "wildcard": true
          }
        },
        {
          "text": "objective",
          "type": "scoreboard:objective",
          "required": false
        }
      ]
    },
    {
      "name": "scoreboard",
      "documentation": "Tracks and displays scores for various objectives.",
      "parameters": [
        {
          "text": "scoreboard",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "keyword",
          "required": true
        },
        {
          "text": "test",
          "type": "keyword",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": true,
          "options": {
            "wildcard": true
          }
        },
        {
          "text": "objective",
          "type": "scoreboard:objective",
          "required": true
        },
        {
          "text": "min",
          "type": "integer",
          "required": true,
          "options": {
            "wildcard": true
          }
        },
        {
          "text": "max",
          "type": "integer",
          "required": false,
          "options": {
            "wildcard": true
          }
        }
      ]
    },
    {
      "name": "scoreboard",
      "documentation": "Tracks and displays scores for various objectives.",
      "parameters": [
        {
          "text": "scoreboard",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "keyword",
          "required": true
        },
        {
          "text": "random",
          "type": "keyword",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": true,
          "options": {
            "wildcard": true
          }
        },
        {
          "text": "objective",
          "type": "scoreboard:objective",
          "required": true
        },
        {
          "text": "min",
          "type": "integer",
          "required": true
        },
        {
          "text": "max",
          "type": "integer",
          "required": true
        }
      ]
    },
    {
      "name": "scoreboard",
      "documentation": "Tracks and displays scores for various objectives.",
      "parameters": [
        {
          "text": "scoreboard",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "keyword",
          "required": true
        },
        {
          "text": "action",
          "type": "enum:ScoreboardPlayersNumAction",
          "required": true
        },
        {
          "text": "player",
          "type": "selector",
          "required": true,
          "options": {
            "wildcard": true
          }
        },
        {
          "text": "objective",
          "type": "scoreboard:objective",
          "required": true
        },
        {
          "text": "count",
          "type": "integer",
          "required": true
        }
      ]
    },
    {
      "name": "scoreboard",
      "documentation": "Tracks and displays scores for various objectives.",
      "parameters": [
        {
          "text": "scoreboard",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "keyword",
          "required": true
        },
        {
          "text": "operation",
          "type": "keyword",
          "required": true
        },
        {
          "text": "targetName",
          "type": "selector",
          "required": true,
          "options": {
            "wildcard": true
          }
        },
        {
          "text": "targetObjective",
          "type": "scoreboard:objective",
          "required": true
        },
        {
          "text": "operation",
          "type": "unknown",
          "required": true
        },
        {
          "text": "selector",
          "type": "selector",
          "required": true,
          "options": {
            "wildcard": true
          }
        },
        {
          "text": "objective",
          "type": "scoreboard:objective",
          "required": true
        }
      ]
    }
  ]
};
