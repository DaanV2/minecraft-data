// auto-generated

import { Command } from "./interface";

export const testforCommand: Command = {
  name: "testfor",
  documentation:
    "Counts entities (players, mobs, items, etc.) matching specified conditions.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "testfor",
      documentation:
        "Counts entities (players, mobs, items, etc.) matching specified conditions.",
      parameters: [
        {
          text: "testfor",
          type: "keyword",
          required: true,
        },
        {
          text: "victim",
          type: "selector",
          required: true,
        },
      ],
    },
  ],
};
