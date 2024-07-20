// auto-generated

import { Command } from "./interface";

export const damageCommand: Command = {
  name: "damage",
  documentation: "Apply damage to the specified entities.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "damage",
      documentation: "Apply damage to the specified entities.",
      parameters: [
        {
          text: "damage",
          type: "keyword",
          required: true,
        },
        {
          text: "target",
          type: "selector",
          required: true,
        },
        {
          text: "amount",
          type: "integer",
          required: true,
        },
        {
          text: "cause",
          type: "enum:damagecause",
          required: false,
        },
      ],
    },
    {
      name: "damage",
      documentation: "Apply damage to the specified entities.",
      parameters: [
        {
          text: "damage",
          type: "keyword",
          required: true,
        },
        {
          text: "target",
          type: "selector",
          required: true,
        },
        {
          text: "amount",
          type: "integer",
          required: true,
        },
        {
          text: "cause",
          type: "enum:damagecause",
          required: true,
        },
        {
          text: "entity",
          type: "keyword",
          required: true,
        },
        {
          text: "damager",
          type: "selector",
          required: true,
        },
      ],
    },
  ],
};
