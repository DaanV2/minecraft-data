// auto-generated

import { Command } from "./interface";

export const saveCommand: Command = {
  name: "save",
  documentation: "Control or check how the game saves data to disk.",
  permissionLevel: 4,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "save",
      documentation: "Control or check how the game saves data to disk.",
      parameters: [
        {
          text: "save",
          type: "keyword",
          required: true,
        },
        {
          text: "mode",
          type: "enum:savemode",
          required: true,
        },
      ],
    },
  ],
};
