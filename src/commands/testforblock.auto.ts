// auto-generated

import { Command } from "./interface";

export const testforblockCommand: Command = {
  name: "testforblock",
  documentation: "Tests whether a certain block is in a specific location.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "testforblock",
      documentation: "Tests whether a certain block is in a specific location.",
      parameters: [
        {
          text: "testforblock",
          type: "keyword",
          required: true,
        },
        {
          text: "position x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "position y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "position z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "tileName",
          type: "enum:block",
          required: true,
        },
        {
          text: "blockStates",
          type: "block_states",
          required: false,
        },
      ],
    },
  ],
};
