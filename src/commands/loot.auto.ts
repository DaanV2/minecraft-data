// auto-generated

import { Command } from "./interface";

export const lootCommand: Command = {
  "name": "loot",
  "documentation": "Drops the given loot table into the specified inventory or into the world.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "loot",
      "documentation": "Drops the given loot table into the specified inventory or into the world.",
      "parameters": [
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "spawn",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "position y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "position z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "loot_table",
          "type": "player",
          "required": true
        },
        {
          "text": "tool",
          "type": "enum:tool",
          "required": false
        }
      ]
    },
    {
      "name": "loot",
      "documentation": "Drops the given loot table into the specified inventory or into the world.",
      "parameters": [
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "spawn",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "position y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "position z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "kill",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "selector",
          "required": true
        },
        {
          "text": "tool",
          "type": "enum:tool",
          "required": false
        }
      ]
    },
    {
      "name": "loot",
      "documentation": "Drops the given loot table into the specified inventory or into the world.",
      "parameters": [
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "give",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "loot_table",
          "type": "player",
          "required": true
        },
        {
          "text": "tool",
          "type": "enum:tool",
          "required": false
        }
      ]
    },
    {
      "name": "loot",
      "documentation": "Drops the given loot table into the specified inventory or into the world.",
      "parameters": [
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "give",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "kill",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "selector",
          "required": true
        },
        {
          "text": "tool",
          "type": "enum:tool",
          "required": false
        }
      ]
    },
    {
      "name": "loot",
      "documentation": "Drops the given loot table into the specified inventory or into the world.",
      "parameters": [
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "insert",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "position y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "position z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "loot_table",
          "type": "player",
          "required": true
        },
        {
          "text": "tool",
          "type": "enum:tool",
          "required": false
        }
      ]
    },
    {
      "name": "loot",
      "documentation": "Drops the given loot table into the specified inventory or into the world.",
      "parameters": [
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "insert",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "position y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "position z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "kill",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "selector",
          "required": true
        },
        {
          "text": "tool",
          "type": "enum:tool",
          "required": false
        }
      ]
    },
    {
      "name": "loot",
      "documentation": "Drops the given loot table into the specified inventory or into the world.",
      "parameters": [
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "replace",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "selector",
          "required": true
        },
        {
          "text": "slotType",
          "type": "enum:entityequipmentslot",
          "required": true
        },
        {
          "text": "slotId",
          "type": "integer",
          "required": true
        },
        {
          "text": "count",
          "type": "integer",
          "required": true
        },
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "loot_table",
          "type": "player",
          "required": true
        },
        {
          "text": "tool",
          "type": "enum:tool",
          "required": false
        }
      ]
    },
    {
      "name": "loot",
      "documentation": "Drops the given loot table into the specified inventory or into the world.",
      "parameters": [
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "replace",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "selector",
          "required": true
        },
        {
          "text": "slotType",
          "type": "enum:entityequipmentslot",
          "required": true
        },
        {
          "text": "slotId",
          "type": "integer",
          "required": true
        },
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "loot_table",
          "type": "player",
          "required": true
        },
        {
          "text": "tool",
          "type": "enum:tool",
          "required": false
        }
      ]
    },
    {
      "name": "loot",
      "documentation": "Drops the given loot table into the specified inventory or into the world.",
      "parameters": [
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "replace",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "selector",
          "required": true
        },
        {
          "text": "slotType",
          "type": "enum:entityequipmentslot",
          "required": true
        },
        {
          "text": "slotId",
          "type": "integer",
          "required": true
        },
        {
          "text": "count",
          "type": "integer",
          "required": true
        },
        {
          "text": "kill",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "selector",
          "required": true
        },
        {
          "text": "tool",
          "type": "enum:tool",
          "required": false
        }
      ]
    },
    {
      "name": "loot",
      "documentation": "Drops the given loot table into the specified inventory or into the world.",
      "parameters": [
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "replace",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "selector",
          "required": true
        },
        {
          "text": "slotType",
          "type": "enum:entityequipmentslot",
          "required": true
        },
        {
          "text": "slotId",
          "type": "integer",
          "required": true
        },
        {
          "text": "kill",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "selector",
          "required": true
        },
        {
          "text": "tool",
          "type": "enum:tool",
          "required": false
        }
      ]
    },
    {
      "name": "loot",
      "documentation": "Drops the given loot table into the specified inventory or into the world.",
      "parameters": [
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "replace",
          "type": "keyword",
          "required": true
        },
        {
          "text": "block",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "position y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "position z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "slot.container",
          "type": "keyword",
          "required": true
        },
        {
          "text": "slotId",
          "type": "integer",
          "required": true
        },
        {
          "text": "count",
          "type": "integer",
          "required": true
        },
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "loot_table",
          "type": "player",
          "required": true
        },
        {
          "text": "tool",
          "type": "enum:tool",
          "required": false
        }
      ]
    },
    {
      "name": "loot",
      "documentation": "Drops the given loot table into the specified inventory or into the world.",
      "parameters": [
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "replace",
          "type": "keyword",
          "required": true
        },
        {
          "text": "block",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "position y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "position z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "slot.container",
          "type": "keyword",
          "required": true
        },
        {
          "text": "slotId",
          "type": "integer",
          "required": true
        },
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "loot_table",
          "type": "player",
          "required": true
        },
        {
          "text": "tool",
          "type": "enum:tool",
          "required": false
        }
      ]
    },
    {
      "name": "loot",
      "documentation": "Drops the given loot table into the specified inventory or into the world.",
      "parameters": [
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "replace",
          "type": "keyword",
          "required": true
        },
        {
          "text": "block",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "position y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "position z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "slot.container",
          "type": "keyword",
          "required": true
        },
        {
          "text": "slotId",
          "type": "integer",
          "required": true
        },
        {
          "text": "count",
          "type": "integer",
          "required": true
        },
        {
          "text": "kill",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "selector",
          "required": true
        },
        {
          "text": "tool",
          "type": "enum:tool",
          "required": false
        }
      ]
    },
    {
      "name": "loot",
      "documentation": "Drops the given loot table into the specified inventory or into the world.",
      "parameters": [
        {
          "text": "loot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "replace",
          "type": "keyword",
          "required": true
        },
        {
          "text": "block",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position x",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "position y",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "position z",
          "type": "coordinate:float",
          "required": true
        },
        {
          "text": "slot.container",
          "type": "keyword",
          "required": true
        },
        {
          "text": "slotId",
          "type": "integer",
          "required": true
        },
        {
          "text": "kill",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "selector",
          "required": true
        },
        {
          "text": "tool",
          "type": "enum:tool",
          "required": false
        }
      ]
    }
  ]
};
