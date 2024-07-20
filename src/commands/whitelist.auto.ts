// auto-generated

import { Command } from "./interface";

export const whitelistCommand: Command = {
  name: "whitelist",
  documentation: "Command alias: whitelist\nManages the server allowlist.",
  permissionLevel: 4,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "whitelist",
      documentation: "Manages the server allowlist.",
      parameters: [
        {
          text: "whitelist",
          type: "keyword",
          required: true,
        },
        {
          text: "action",
          type: "enum:allowlistaction",
          required: true,
        },
        {
          text: "name",
          type: "player",
          required: false,
        },
      ],
    },
  ],
};
