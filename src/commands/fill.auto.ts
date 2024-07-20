// auto-generated

import { Command } from "./interface";

export const fillCommand: Command = {
  name: "fill",
  documentation: "Fills all or parts of a region with a specific block.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "fill",
      documentation: "Fills all or parts of a region with a specific block.",
      parameters: [
        {
          text: "fill",
          type: "keyword",
          required: true,
        },
        {
          text: "from x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "from y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "from z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "to x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "to y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "to z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "tileName",
          type: "enum:block",
          required: true,
        },
        {
          text: "blockStates",
          type: "block_states",
          required: true,
        },
        {
          text: "oldBlockHandling",
          type: "enum:fillmode",
          required: false,
        },
      ],
    },
    {
      name: "fill",
      documentation: "Fills all or parts of a region with a specific block.",
      parameters: [
        {
          text: "fill",
          type: "keyword",
          required: true,
        },
        {
          text: "from x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "from y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "from z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "to x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "to y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "to z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "tileName",
          type: "enum:block",
          required: true,
        },
        {
          text: "oldBlockHandling",
          type: "enum:fillmode",
          required: false,
        },
      ],
    },
    {
      name: "fill",
      documentation: "Fills all or parts of a region with a specific block.",
      parameters: [
        {
          text: "fill",
          type: "keyword",
          required: true,
        },
        {
          text: "from x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "from y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "from z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "to x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "to y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "to z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "tileName",
          type: "enum:block",
          required: true,
        },
        {
          text: "blockStates",
          type: "block_states",
          required: true,
        },
        {
          text: "replace",
          type: "keyword",
          required: true,
        },
        {
          text: "replaceTileName",
          type: "enum:block",
          required: false,
        },
        {
          text: "replaceBlockStates",
          type: "block_states",
          required: false,
        },
      ],
    },
    {
      name: "fill",
      documentation: "Fills all or parts of a region with a specific block.",
      parameters: [
        {
          text: "fill",
          type: "keyword",
          required: true,
        },
        {
          text: "from x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "from y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "from z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "to x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "to y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "to z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "tileName",
          type: "enum:block",
          required: true,
        },
        {
          text: "replace",
          type: "keyword",
          required: true,
        },
        {
          text: "replaceTileName",
          type: "enum:block",
          required: false,
        },
        {
          text: "replaceBlockStates",
          type: "block_states",
          required: false,
        },
      ],
    },
  ],
};
