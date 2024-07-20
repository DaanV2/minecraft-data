// auto-generated

import { Command } from "./interface";

export const killCommand: Command = {
  name: "kill",
  documentation: "Kills entities (players, mobs, etc.).",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "kill",
      documentation: "Kills entities (players, mobs, etc.).",
      parameters: [
        {
          text: "kill",
          type: "keyword",
          required: true,
        },
        {
          text: "target",
          type: "selector",
          required: false,
        },
      ],
    },
  ],
};
