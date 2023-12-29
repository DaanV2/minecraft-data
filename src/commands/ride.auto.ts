// auto-generated

import { Command } from "./interface";

export const rideCommand: Command = {
  "name": "ride",
  "documentation": "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "ride",
      "documentation": "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.",
      "parameters": [
        {
          "text": "ride",
          "type": "keyword",
          "required": true
        },
        {
          "text": "riders",
          "type": "selector",
          "required": true
        },
        {
          "text": "start_riding",
          "type": "keyword",
          "required": true
        },
        {
          "text": "ride",
          "type": "selector",
          "required": true
        },
        {
          "text": "teleportRules",
          "type": "enum:teleportrules",
          "required": false
        },
        {
          "text": "howToFill",
          "type": "enum:filltype",
          "required": false
        }
      ]
    },
    {
      "name": "ride",
      "documentation": "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.",
      "parameters": [
        {
          "text": "ride",
          "type": "keyword",
          "required": true
        },
        {
          "text": "riders",
          "type": "selector",
          "required": true
        },
        {
          "text": "stop_riding",
          "type": "keyword",
          "required": true
        }
      ]
    },
    {
      "name": "ride",
      "documentation": "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.",
      "parameters": [
        {
          "text": "ride",
          "type": "keyword",
          "required": true
        },
        {
          "text": "rides",
          "type": "selector",
          "required": true
        },
        {
          "text": "evict_riders",
          "type": "keyword",
          "required": true
        }
      ]
    },
    {
      "name": "ride",
      "documentation": "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.",
      "parameters": [
        {
          "text": "ride",
          "type": "keyword",
          "required": true
        },
        {
          "text": "rides",
          "type": "selector",
          "required": true
        },
        {
          "text": "summon_rider",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entityType",
          "type": "enum:entitytype",
          "required": true
        },
        {
          "text": "spawnEvent",
          "type": "player",
          "required": false
        },
        {
          "text": "nameTag",
          "type": "player",
          "required": false
        }
      ]
    },
    {
      "name": "ride",
      "documentation": "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.",
      "parameters": [
        {
          "text": "ride",
          "type": "keyword",
          "required": true
        },
        {
          "text": "riders",
          "type": "selector",
          "required": true
        },
        {
          "text": "summon_ride",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entityType",
          "type": "enum:entitytype",
          "required": true
        },
        {
          "text": "rideRules",
          "type": "enum:riderules",
          "required": false
        },
        {
          "text": "spawnEvent",
          "type": "player",
          "required": false
        },
        {
          "text": "nameTag",
          "type": "player",
          "required": false
        }
      ]
    }
  ]
};
