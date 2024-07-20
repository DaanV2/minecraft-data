// auto-generated

import { Command } from "./interface";

export const titleCommand: Command = {
  name: "title",
  documentation: "Controls screen titles.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "title",
      documentation: "Controls screen titles.",
      parameters: [
        {
          text: "title",
          type: "keyword",
          required: true,
        },
        {
          text: "player",
          type: "selector",
          required: true,
        },
        {
          text: "clear",
          type: "keyword",
          required: true,
        },
      ],
    },
    {
      name: "title",
      documentation: "Controls screen titles.",
      parameters: [
        {
          text: "title",
          type: "keyword",
          required: true,
        },
        {
          text: "player",
          type: "selector",
          required: true,
        },
        {
          text: "reset",
          type: "keyword",
          required: true,
        },
      ],
    },
    {
      name: "title",
      documentation: "Controls screen titles.",
      parameters: [
        {
          text: "title",
          type: "keyword",
          required: true,
        },
        {
          text: "player",
          type: "selector",
          required: true,
        },
        {
          text: "titleLocation",
          type: "enum:titleset",
          required: true,
        },
        {
          text: "titleText",
          type: "message",
          required: true,
        },
      ],
    },
    {
      name: "title",
      documentation: "Controls screen titles.",
      parameters: [
        {
          text: "title",
          type: "keyword",
          required: true,
        },
        {
          text: "player",
          type: "selector",
          required: true,
        },
        {
          text: "times",
          type: "keyword",
          required: true,
        },
        {
          text: "fadeIn",
          type: "integer",
          required: true,
        },
        {
          text: "stay",
          type: "integer",
          required: true,
        },
        {
          text: "fadeOut",
          type: "integer",
          required: true,
        },
      ],
    },
  ],
};
