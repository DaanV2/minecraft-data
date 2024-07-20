// auto-generated

import { Command } from "./interface";

export const testforblocksCommand: Command = {
  name: "testforblocks",
  documentation: "Tests whether the blocks in two regions match.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "testforblocks",
      documentation: "Tests whether the blocks in two regions match.",
      parameters: [
        {
          text: "testforblocks",
          type: "keyword",
          required: true,
        },
        {
          text: "begin x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "begin y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "begin z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "end x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "end y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "end z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "destination x",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "destination y",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "destination z",
          type: "coordinate:integer",
          required: true,
        },
        {
          text: "mode",
          type: "enum:testforblocksmode",
          required: false,
        },
      ],
    },
  ],
};
