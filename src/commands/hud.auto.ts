// auto-generated

import { Command } from "./interface";

export const hudCommand: Command = {
  name: "hud",
  documentation: "Changes the visibility of hud elements.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "hud",
      documentation: "Changes the visibility of hud elements.",
      parameters: [
        {
          text: "hud",
          type: "keyword",
          required: true,
        },
        {
          text: "target",
          type: "selector",
          required: true,
        },
        {
          text: "visible",
          type: "enum:hudvisibility",
          required: true,
        },
        {
          text: "hud_element",
          type: "enum:hudelement",
          required: false,
        },
      ],
    },
  ],
};
