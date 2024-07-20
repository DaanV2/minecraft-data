// auto-generated

import { Command } from "./interface";

export const camerashakeCommand: Command = {
  name: "camerashake",
  documentation:
    "Applies shaking to the players' camera with a specified intensity and duration.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "camerashake",
      documentation:
        "Applies shaking to the players' camera with a specified intensity and duration.",
      parameters: [
        {
          text: "camerashake",
          type: "keyword",
          required: true,
        },
        {
          text: "add",
          type: "keyword",
          required: true,
        },
        {
          text: "player",
          type: "selector",
          required: true,
        },
        {
          text: "intensity",
          type: "value",
          required: false,
        },
        {
          text: "seconds",
          type: "value",
          required: false,
        },
        {
          text: "shakeType",
          type: "enum:camerashaketype",
          required: false,
        },
      ],
    },
    {
      name: "camerashake",
      documentation:
        "Applies shaking to the players' camera with a specified intensity and duration.",
      parameters: [
        {
          text: "camerashake",
          type: "keyword",
          required: true,
        },
        {
          text: "stop",
          type: "keyword",
          required: true,
        },
        {
          text: "player",
          type: "selector",
          required: false,
        },
      ],
    },
  ],
};
