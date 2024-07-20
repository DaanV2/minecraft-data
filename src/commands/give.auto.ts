// auto-generated

import { Command } from "./interface";

export const giveCommand: Command = {
  name: "give",
  documentation: "Gives an item to a player.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "give",
      documentation: "Gives an item to a player.",
      parameters: [
        {
          text: "give",
          type: "keyword",
          required: true,
        },
        {
          text: "player",
          type: "selector",
          required: true,
        },
        {
          text: "itemName",
          type: "enum:item",
          required: true,
        },
        {
          text: "amount",
          type: "integer",
          required: false,
        },
        {
          text: "data",
          type: "integer",
          required: false,
        },
        {
          text: "components",
          type: "json",
          required: false,
        },
      ],
    },
  ],
};
