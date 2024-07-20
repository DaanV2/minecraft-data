// auto-generated

import { Command } from "./interface";

export const setmaxplayersCommand: Command = {
  name: "setmaxplayers",
  documentation: "Sets the maximum number of players for this game session.",
  permissionLevel: 3,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "setmaxplayers",
      documentation:
        "Sets the maximum number of players for this game session.",
      parameters: [
        {
          text: "setmaxplayers",
          type: "keyword",
          required: true,
        },
        {
          text: "maxPlayers",
          type: "integer",
          required: true,
        },
      ],
    },
  ],
};
