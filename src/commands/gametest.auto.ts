// auto-generated

import { Command } from "./interface";

export const gametestCommand: Command = {
  name: "gametest",
  documentation: "Interacts with gametest.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "gametest",
      documentation: "Interacts with gametest.",
      parameters: [
        {
          text: "gametest",
          type: "keyword",
          required: true,
        },
        {
          text: "runthis",
          type: "keyword",
          required: true,
        },
      ],
    },
    {
      name: "gametest",
      documentation: "Interacts with gametest.",
      parameters: [
        {
          text: "gametest",
          type: "keyword",
          required: true,
        },
        {
          text: "run",
          type: "keyword",
          required: true,
        },
        {
          text: "testName",
          type: "gametest:name",
          required: true,
        },
        {
          text: "rotationSteps",
          type: "integer",
          required: false,
        },
      ],
    },
    {
      name: "gametest",
      documentation: "Interacts with gametest.",
      parameters: [
        {
          text: "gametest",
          type: "keyword",
          required: true,
        },
        {
          text: "run",
          type: "keyword",
          required: true,
        },
        {
          text: "testName",
          type: "gametest:name",
          required: true,
        },
        {
          text: "stopOnFailure",
          type: "boolean",
          required: true,
        },
        {
          text: "repeatCount",
          type: "integer",
          required: true,
        },
        {
          text: "rotationSteps",
          type: "integer",
          required: false,
        },
      ],
    },
    {
      name: "gametest",
      documentation: "Interacts with gametest.",
      parameters: [
        {
          text: "gametest",
          type: "keyword",
          required: true,
        },
        {
          text: "runset",
          type: "keyword",
          required: true,
        },
        {
          text: "tag",
          type: "gametest:tag",
          required: false,
        },
        {
          text: "rotationSteps",
          type: "integer",
          required: false,
        },
      ],
    },
    {
      name: "gametest",
      documentation: "Interacts with gametest.",
      parameters: [
        {
          text: "gametest",
          type: "keyword",
          required: true,
        },
        {
          text: "runsetuntilfail",
          type: "keyword",
          required: true,
        },
        {
          text: "tag",
          type: "gametest:tag",
          required: false,
        },
        {
          text: "rotationSteps",
          type: "integer",
          required: false,
        },
      ],
    },
    {
      name: "gametest",
      documentation: "Interacts with gametest.",
      parameters: [
        {
          text: "gametest",
          type: "keyword",
          required: true,
        },
        {
          text: "clearall",
          type: "keyword",
          required: true,
        },
      ],
    },
    {
      name: "gametest",
      documentation: "Interacts with gametest.",
      parameters: [
        {
          text: "gametest",
          type: "keyword",
          required: true,
        },
        {
          text: "pos",
          type: "keyword",
          required: true,
        },
      ],
    },
    {
      name: "gametest",
      documentation: "Interacts with gametest.",
      parameters: [
        {
          text: "gametest",
          type: "keyword",
          required: true,
        },
        {
          text: "create",
          type: "keyword",
          required: true,
        },
        {
          text: "testName",
          type: "player",
          required: true,
        },
        {
          text: "width",
          type: "integer",
          required: false,
        },
        {
          text: "height",
          type: "integer",
          required: false,
        },
        {
          text: "depth",
          type: "integer",
          required: false,
        },
      ],
    },
    {
      name: "gametest",
      documentation: "Interacts with gametest.",
      parameters: [
        {
          text: "gametest",
          type: "keyword",
          required: true,
        },
        {
          text: "runthese",
          type: "keyword",
          required: true,
        },
      ],
    },
    {
      name: "gametest",
      documentation: "Interacts with gametest.",
      parameters: [
        {
          text: "gametest",
          type: "keyword",
          required: true,
        },
        {
          text: "stopall",
          type: "keyword",
          required: true,
        },
      ],
    },
  ],
};
