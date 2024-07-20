// auto-generated

import { Command } from "./interface";

export const sendshowstoreofferCommand: Command = {
  name: "sendshowstoreoffer",
  documentation: "Sends a request to show a store offer to the target player.",
  permissionLevel: 4,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "sendshowstoreoffer",
      documentation:
        "Sends a request to show a store offer to the target player.",
      parameters: [
        {
          text: "sendshowstoreoffer",
          type: "keyword",
          required: true,
        },
        {
          text: "player",
          type: "selector",
          required: true,
        },
        {
          text: "redirectType",
          type: "enum:redirectlocation",
          required: true,
        },
        {
          text: "offerId",
          type: "player",
          required: true,
        },
      ],
    },
    {
      name: "sendshowstoreoffer",
      documentation:
        "Sends a request to show a store offer to the target player.",
      parameters: [
        {
          text: "sendshowstoreoffer",
          type: "keyword",
          required: true,
        },
        {
          text: "player",
          type: "selector",
          required: true,
        },
        {
          text: "server",
          type: "keyword",
          required: true,
        },
      ],
    },
  ],
};
