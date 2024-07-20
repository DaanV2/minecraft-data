// auto-generated

import { Command } from "./interface";

export const musicCommand: Command = {
  name: "music",
  documentation: "Allows you to control playing music tracks.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "music",
      documentation: "Allows you to control playing music tracks.",
      parameters: [
        {
          text: "music",
          type: "keyword",
          required: true,
        },
        {
          text: "queue",
          type: "keyword",
          required: true,
        },
        {
          text: "trackName",
          type: "player",
          required: true,
        },
        {
          text: "volume",
          type: "value",
          required: false,
        },
        {
          text: "fadeSeconds",
          type: "value",
          required: false,
        },
        {
          text: "repeatMode",
          type: "enum:musicrepeatmode",
          required: false,
        },
      ],
    },
    {
      name: "music",
      documentation: "Allows you to control playing music tracks.",
      parameters: [
        {
          text: "music",
          type: "keyword",
          required: true,
        },
        {
          text: "play",
          type: "keyword",
          required: true,
        },
        {
          text: "trackName",
          type: "player",
          required: true,
        },
        {
          text: "volume",
          type: "value",
          required: false,
        },
        {
          text: "fadeSeconds",
          type: "value",
          required: false,
        },
        {
          text: "repeatMode",
          type: "enum:musicrepeatmode",
          required: false,
        },
      ],
    },
    {
      name: "music",
      documentation: "Allows you to control playing music tracks.",
      parameters: [
        {
          text: "music",
          type: "keyword",
          required: true,
        },
        {
          text: "stop",
          type: "keyword",
          required: true,
        },
        {
          text: "fadeSeconds",
          type: "value",
          required: false,
        },
      ],
    },
    {
      name: "music",
      documentation: "Allows you to control playing music tracks.",
      parameters: [
        {
          text: "music",
          type: "keyword",
          required: true,
        },
        {
          text: "volume",
          type: "keyword",
          required: true,
        },
        {
          text: "volume",
          type: "value",
          required: true,
        },
      ],
    },
  ],
};
