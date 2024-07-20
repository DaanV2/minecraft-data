// auto-generated

import { Command } from "./interface";

export const stopsoundCommand: Command = {
  name: "stopsound",
  documentation: "Stops a sound.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "stopsound",
      documentation: "Stops a sound.",
      parameters: [
        {
          text: "stopsound",
          type: "keyword",
          required: true,
        },
        {
          text: "player",
          type: "selector",
          required: true,
        },
        {
          text: "sound",
          type: "player",
          required: false,
        },
      ],
    },
  ],
};
