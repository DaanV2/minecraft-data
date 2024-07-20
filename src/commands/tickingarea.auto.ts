// auto-generated

import { Command } from "./interface";

export const tickingareaCommand: Command = {
  name: "tickingarea",
  documentation: "Add, remove, or list ticking areas.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "tickingarea",
      documentation: "Add, remove, or list ticking areas.",
      parameters: [
        {
          text: "tickingarea",
          type: "keyword",
          required: true,
        },
        {
          text: "add",
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
          text: "name",
          type: "player",
          required: false,
        },
        {
          text: "preload",
          type: "boolean",
          required: false,
        },
      ],
    },
    {
      name: "tickingarea",
      documentation: "Add, remove, or list ticking areas.",
      parameters: [
        {
          text: "tickingarea",
          type: "keyword",
          required: true,
        },
        {
          text: "add",
          type: "keyword",
          required: true,
        },
        {
          text: "circle",
          type: "keyword",
          required: true,
        },
        {
          text: "center x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "center y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "center z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "radius",
          type: "integer",
          required: true,
        },
        {
          text: "name",
          type: "player",
          required: false,
        },
        {
          text: "preload",
          type: "boolean",
          required: false,
        },
      ],
    },
    {
      name: "tickingarea",
      documentation: "Add, remove, or list ticking areas.",
      parameters: [
        {
          text: "tickingarea",
          type: "keyword",
          required: true,
        },
        {
          text: "remove",
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
      ],
    },
    {
      name: "tickingarea",
      documentation: "Add, remove, or list ticking areas.",
      parameters: [
        {
          text: "tickingarea",
          type: "keyword",
          required: true,
        },
        {
          text: "remove",
          type: "keyword",
          required: true,
        },
        {
          text: "name",
          type: "player",
          required: true,
        },
      ],
    },
    {
      name: "tickingarea",
      documentation: "Add, remove, or list ticking areas.",
      parameters: [
        {
          text: "tickingarea",
          type: "keyword",
          required: true,
        },
        {
          text: "remove_all",
          type: "keyword",
          required: true,
        },
      ],
    },
    {
      name: "tickingarea",
      documentation: "Add, remove, or list ticking areas.",
      parameters: [
        {
          text: "tickingarea",
          type: "keyword",
          required: true,
        },
        {
          text: "list",
          type: "keyword",
          required: true,
        },
        {
          text: "all-dimensions",
          type: "keyword",
          required: false,
        },
      ],
    },
    {
      name: "tickingarea",
      documentation: "Add, remove, or list ticking areas.",
      parameters: [
        {
          text: "tickingarea",
          type: "keyword",
          required: true,
        },
        {
          text: "preload",
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
          text: "preload",
          type: "boolean",
          required: false,
        },
      ],
    },
    {
      name: "tickingarea",
      documentation: "Add, remove, or list ticking areas.",
      parameters: [
        {
          text: "tickingarea",
          type: "keyword",
          required: true,
        },
        {
          text: "preload",
          type: "keyword",
          required: true,
        },
        {
          text: "name",
          type: "player",
          required: true,
        },
        {
          text: "preload",
          type: "boolean",
          required: false,
        },
      ],
    },
  ],
};
