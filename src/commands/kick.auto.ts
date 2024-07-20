// auto-generated

import { Command } from "./interface";

export const kickCommand: Command = {
  name: "kick",
  documentation: "Kicks a player from the server.",
  permissionLevel: 1,
  requiresCheatsEnabled: false,
  syntaxes: [
    {
      name: "kick",
      documentation: "Kicks a player from the server.",
      parameters: [
        {
          text: "kick",
          type: "keyword",
          required: true,
        },
        {
          text: "name",
          type: "selector",
          required: true,
        },
        {
          text: "reason",
          type: "message",
          required: true,
        },
      ],
    },
  ],
};
