// auto-generated

import { Command } from "./interface";

export const playanimationCommand: Command = {
  name: "playanimation",
  documentation:
    "Makes one or more entities play a one-off animation. Assumes all variables are setup correctly.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "playanimation",
      documentation:
        "Makes one or more entities play a one-off animation. Assumes all variables are setup correctly.",
      parameters: [
        {
          text: "playanimation",
          type: "keyword",
          required: true,
        },
        {
          text: "entity",
          type: "selector",
          required: true,
        },
        {
          text: "animation",
          type: "player",
          required: true,
        },
        {
          text: "next_state",
          type: "player",
          required: false,
        },
        {
          text: "blend_out_time",
          type: "value",
          required: false,
        },
        {
          text: "stop_expression",
          type: "player",
          required: false,
        },
        {
          text: "controller",
          type: "player",
          required: false,
        },
      ],
    },
  ],
};
