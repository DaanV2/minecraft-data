// auto-generated

import { Command } from "./interface";

export const deopCommand: Command = {
  name: "deop",
  documentation: "Revokes operator status from a player.",
  permissionLevel: 2,
  requiresCheatsEnabled: false,
  syntaxes: [
    {
      name: "deop",
      documentation: "Revokes operator status from a player.",
      parameters: [
        {
          text: "deop",
          type: "keyword",
          required: true,
        },
        {
          text: "player",
          type: "selector",
          required: true,
        },
      ],
    },
  ],
};
