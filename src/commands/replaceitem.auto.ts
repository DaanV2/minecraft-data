// auto-generated

import { Command } from "./interface";

export const replaceitemCommand: Command = {
  name: "replaceitem",
  documentation: "Replaces items in inventories.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "replaceitem",
      documentation: "Replaces items in inventories.",
      parameters: [
        {
          text: "replaceitem",
          type: "keyword",
          required: true,
        },
        {
          text: "block",
          type: "keyword",
          required: true,
        },
        {
          text: "position x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "position y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "position z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "slot.container",
          type: "keyword",
          required: true,
        },
        {
          text: "slotId",
          type: "integer",
          required: true,
        },
        {
          text: "itemName",
          type: "enum:item",
          required: true,
        },
        {
          text: "amount",
          type: "integer",
          required: false,
        },
        {
          text: "data",
          type: "integer",
          required: false,
        },
        {
          text: "components",
          type: "json",
          required: false,
        },
      ],
    },
    {
      name: "replaceitem",
      documentation: "Replaces items in inventories.",
      parameters: [
        {
          text: "replaceitem",
          type: "keyword",
          required: true,
        },
        {
          text: "entity",
          type: "keyword",
          required: true,
        },
        {
          text: "target",
          type: "selector",
          required: true,
        },
        {
          text: "slotType",
          type: "enum:entityequipmentslot",
          required: true,
        },
        {
          text: "slotId",
          type: "integer",
          required: true,
        },
        {
          text: "itemName",
          type: "enum:item",
          required: true,
        },
        {
          text: "amount",
          type: "integer",
          required: false,
        },
        {
          text: "data",
          type: "integer",
          required: false,
        },
        {
          text: "components",
          type: "json",
          required: false,
        },
      ],
    },
    {
      name: "replaceitem",
      documentation: "Replaces items in inventories.",
      parameters: [
        {
          text: "replaceitem",
          type: "keyword",
          required: true,
        },
        {
          text: "block",
          type: "keyword",
          required: true,
        },
        {
          text: "position x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "position y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "position z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "slot.container",
          type: "keyword",
          required: true,
        },
        {
          text: "slotId",
          type: "integer",
          required: true,
        },
        {
          text: "oldItemHandling",
          type: "enum:replacemode",
          required: true,
        },
        {
          text: "itemName",
          type: "enum:item",
          required: true,
        },
        {
          text: "amount",
          type: "integer",
          required: false,
        },
        {
          text: "data",
          type: "integer",
          required: false,
        },
        {
          text: "components",
          type: "json",
          required: false,
        },
      ],
    },
    {
      name: "replaceitem",
      documentation: "Replaces items in inventories.",
      parameters: [
        {
          text: "replaceitem",
          type: "keyword",
          required: true,
        },
        {
          text: "entity",
          type: "keyword",
          required: true,
        },
        {
          text: "target",
          type: "selector",
          required: true,
        },
        {
          text: "slotType",
          type: "enum:entityequipmentslot",
          required: true,
        },
        {
          text: "slotId",
          type: "integer",
          required: true,
        },
        {
          text: "oldItemHandling",
          type: "enum:replacemode",
          required: true,
        },
        {
          text: "itemName",
          type: "enum:item",
          required: true,
        },
        {
          text: "amount",
          type: "integer",
          required: false,
        },
        {
          text: "data",
          type: "integer",
          required: false,
        },
        {
          text: "components",
          type: "json",
          required: false,
        },
      ],
    },
  ],
};
