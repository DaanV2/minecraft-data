// auto-generated

import { Command } from "./interface";

export const opCommand: Command = {
  name: "op",
  documentation: "Grants operator status to a player.",
  permissionLevel: 2,
  requiresCheatsEnabled: false,
  syntaxes: [
    {
      name: "op",
      documentation: "Grants operator status to a player.",
      parameters: [
        {
          text: "op",
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
