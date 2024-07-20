// auto-generated

import { Command } from "./interface";

export const summonCommand: Command = {
  name: "summon",
  documentation: "Summons an entity.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "summon",
      documentation: "Summons an entity.",
      parameters: [
        {
          text: "summon",
          type: "keyword",
          required: true,
        },
        {
          text: "entityType",
          type: "enum:entitytype",
          required: true,
        },
        {
          text: "spawnPos x",
          type: "coordinate:float",
          required: false,
        },
        {
          text: "spawnPos y",
          type: "coordinate:float",
          required: false,
        },
        {
          text: "spawnPos z",
          type: "coordinate:float",
          required: false,
        },
        {
          text: "yRot",
          type: "rotation",
          required: false,
        },
        {
          text: "xRot",
          type: "rotation",
          required: false,
        },
        {
          text: "spawnEvent",
          type: "enum:entityevents",
          required: false,
        },
        {
          text: "nameTag",
          type: "player",
          required: false,
        },
      ],
    },
    {
      name: "summon",
      documentation: "Summons an entity.",
      parameters: [
        {
          text: "summon",
          type: "keyword",
          required: true,
        },
        {
          text: "entityType",
          type: "enum:entitytype",
          required: true,
        },
        {
          text: "nameTag",
          type: "player",
          required: true,
        },
        {
          text: "spawnPos x",
          type: "coordinate:float",
          required: false,
        },
        {
          text: "spawnPos y",
          type: "coordinate:float",
          required: false,
        },
        {
          text: "spawnPos z",
          type: "coordinate:float",
          required: false,
        },
      ],
    },
    {
      name: "summon",
      documentation: "Summons an entity.",
      parameters: [
        {
          text: "summon",
          type: "keyword",
          required: true,
        },
        {
          text: "entityType",
          type: "enum:entitytype",
          required: true,
        },
        {
          text: "spawnPos x",
          type: "coordinate:float",
          required: false,
        },
        {
          text: "spawnPos y",
          type: "coordinate:float",
          required: false,
        },
        {
          text: "spawnPos z",
          type: "coordinate:float",
          required: false,
        },
        {
          text: "facing",
          type: "keyword",
          required: true,
        },
        {
          text: "lookAtPosition x",
          type: "coordinate:float",
          required: true,
        },
        {
          text: "lookAtPosition y",
          type: "coordinate:float",
          required: true,
        },
        {
          text: "lookAtPosition z",
          type: "coordinate:float",
          required: true,
        },
        {
          text: "spawnEvent",
          type: "enum:entityevents",
          required: false,
        },
        {
          text: "nameTag",
          type: "player",
          required: false,
        },
      ],
    },
    {
      name: "summon",
      documentation: "Summons an entity.",
      parameters: [
        {
          text: "summon",
          type: "keyword",
          required: true,
        },
        {
          text: "entityType",
          type: "enum:entitytype",
          required: true,
        },
        {
          text: "spawnPos x",
          type: "coordinate:float",
          required: false,
        },
        {
          text: "spawnPos y",
          type: "coordinate:float",
          required: false,
        },
        {
          text: "spawnPos z",
          type: "coordinate:float",
          required: false,
        },
        {
          text: "facing",
          type: "keyword",
          required: true,
        },
        {
          text: "lookAtEntity",
          type: "selector",
          required: true,
        },
        {
          text: "spawnEvent",
          type: "enum:entityevents",
          required: false,
        },
        {
          text: "nameTag",
          type: "player",
          required: false,
        },
      ],
    },
  ],
};
