// auto-generated

import { Command } from "./interface";

export const dialogueCommand: Command = {
  name: "dialogue",
  documentation: "Opens NPC dialogue for a player.",
  permissionLevel: 1,
  requiresCheatsEnabled: true,
  syntaxes: [
    {
      name: "dialogue",
      documentation: "Opens NPC dialogue for a player.",
      parameters: [
        {
          text: "dialogue",
          type: "keyword",
          required: true,
        },
        {
          text: "open",
          type: "keyword",
          required: true,
        },
        {
          text: "npc",
          type: "selector",
          required: true,
        },
        {
          text: "player",
          type: "selector",
          required: true,
        },
        {
          text: "sceneName",
          type: "player",
          required: false,
        },
      ],
    },
    {
      name: "dialogue",
      documentation: "Opens NPC dialogue for a player.",
      parameters: [
        {
          text: "dialogue",
          type: "keyword",
          required: true,
        },
        {
          text: "change",
          type: "keyword",
          required: true,
        },
        {
          text: "npc",
          type: "selector",
          required: true,
        },
        {
          text: "sceneName",
          type: "player",
          required: true,
        },
        {
          text: "players",
          type: "selector",
          required: false,
        },
      ],
    },
  ],
};
