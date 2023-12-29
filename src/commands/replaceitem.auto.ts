// auto-generated

import { Command } from "./interface";

export const replaceitemCommand: Command = {
  "name": "replaceitem",
  "documentation": "Replaces items in inventories.",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "replaceitem",
      "documentation": "Replaces items in inventories.",
      "parameters": [
        {
          "text": "replaceitem",
          "type": "keyword",
          "required": true
        },
        {
          "text": "block",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position",
          "type": "unknown",
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
          "text": "itemName",
          "type": "enum:Item",
          "required": true
        },
        {
          "text": "amount",
          "type": "integer",
          "required": false
        },
        {
          "text": "data",
          "type": "integer",
          "required": false
        },
        {
          "text": "components",
          "type": "unknown",
          "required": false
        }
      ]
    },
    {
      "name": "replaceitem",
      "documentation": "Replaces items in inventories.",
      "parameters": [
        {
          "text": "replaceitem",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "keyword",
          "required": true
        },
        {
          "text": "target",
          "type": "selector",
          "required": true
        },
        {
          "text": "slotType",
          "type": "enum:EntityEquipmentSlot",
          "required": true
        },
        {
          "text": "slotId",
          "type": "integer",
          "required": true
        },
        {
          "text": "itemName",
          "type": "enum:Item",
          "required": true
        },
        {
          "text": "amount",
          "type": "integer",
          "required": false
        },
        {
          "text": "data",
          "type": "integer",
          "required": false
        },
        {
          "text": "components",
          "type": "unknown",
          "required": false
        }
      ]
    },
    {
      "name": "replaceitem",
      "documentation": "Replaces items in inventories.",
      "parameters": [
        {
          "text": "replaceitem",
          "type": "keyword",
          "required": true
        },
        {
          "text": "block",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position",
          "type": "unknown",
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
          "text": "oldItemHandling",
          "type": "enum:ReplaceMode",
          "required": true
        },
        {
          "text": "itemName",
          "type": "enum:Item",
          "required": true
        },
        {
          "text": "amount",
          "type": "integer",
          "required": false
        },
        {
          "text": "data",
          "type": "integer",
          "required": false
        },
        {
          "text": "components",
          "type": "unknown",
          "required": false
        }
      ]
    },
    {
      "name": "replaceitem",
      "documentation": "Replaces items in inventories.",
      "parameters": [
        {
          "text": "replaceitem",
          "type": "keyword",
          "required": true
        },
        {
          "text": "entity",
          "type": "keyword",
          "required": true
        },
        {
          "text": "target",
          "type": "selector",
          "required": true
        },
        {
          "text": "slotType",
          "type": "enum:EntityEquipmentSlot",
          "required": true
        },
        {
          "text": "slotId",
          "type": "integer",
          "required": true
        },
        {
          "text": "oldItemHandling",
          "type": "enum:ReplaceMode",
          "required": true
        },
        {
          "text": "itemName",
          "type": "enum:Item",
          "required": true
        },
        {
          "text": "amount",
          "type": "integer",
          "required": false
        },
        {
          "text": "data",
          "type": "integer",
          "required": false
        },
        {
          "text": "components",
          "type": "unknown",
          "required": false
        }
      ]
    }
  ]
};
