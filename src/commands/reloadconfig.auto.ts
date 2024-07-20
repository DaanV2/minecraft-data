// auto-generated

import { Command } from "./interface";

export const reloadconfigCommand: Command = {
  name: "reloadconfig",
  documentation:
    "Reloads configuration files relating to variables, secrets, permissions, etc.",
  permissionLevel: 4,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "reloadconfig",
      documentation:
        "Reloads configuration files relating to variables, secrets, permissions, etc.",
      parameters: [
        {
          text: "reloadconfig",
          type: "keyword",
          required: true,
        },
      ],
    },
  ],
};
