// auto-generated

import { Command } from "./interface";

export const cameraCommand: Command = {
  "name": "camera",
  "documentation": "Issues a camera instruction",
  "permissionLevel": 1,
  "requiresCheatsEnabled": true,
  "syntaxes": [
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "preset",
          "type": "enum:CameraPresets",
          "required": true
        },
        {
          "text": "ease",
          "type": "keyword",
          "required": true
        },
        {
          "text": "easeTime",
          "type": "value",
          "required": true
        },
        {
          "text": "easeType",
          "type": "enum:Easing",
          "required": true
        },
        {
          "text": "pos",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position",
          "type": "unknown",
          "required": true
        },
        {
          "text": "rot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "xRot",
          "type": "rotation",
          "required": true
        },
        {
          "text": "yRot",
          "type": "rotation",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "preset",
          "type": "enum:CameraPresets",
          "required": true
        },
        {
          "text": "ease",
          "type": "keyword",
          "required": true
        },
        {
          "text": "easeTime",
          "type": "value",
          "required": true
        },
        {
          "text": "easeType",
          "type": "enum:Easing",
          "required": true
        },
        {
          "text": "pos",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position",
          "type": "unknown",
          "required": true
        },
        {
          "text": "facing",
          "type": "keyword",
          "required": true
        },
        {
          "text": "lookAtEntity",
          "type": "selector",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "preset",
          "type": "enum:CameraPresets",
          "required": true
        },
        {
          "text": "ease",
          "type": "keyword",
          "required": true
        },
        {
          "text": "easeTime",
          "type": "value",
          "required": true
        },
        {
          "text": "easeType",
          "type": "enum:Easing",
          "required": true
        },
        {
          "text": "pos",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position",
          "type": "unknown",
          "required": true
        },
        {
          "text": "facing",
          "type": "keyword",
          "required": true
        },
        {
          "text": "lookAtPosition",
          "type": "unknown",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "preset",
          "type": "enum:CameraPresets",
          "required": true
        },
        {
          "text": "ease",
          "type": "keyword",
          "required": true
        },
        {
          "text": "easeTime",
          "type": "value",
          "required": true
        },
        {
          "text": "easeType",
          "type": "enum:Easing",
          "required": true
        },
        {
          "text": "pos",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position",
          "type": "unknown",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "preset",
          "type": "enum:CameraPresets",
          "required": true
        },
        {
          "text": "ease",
          "type": "keyword",
          "required": true
        },
        {
          "text": "easeTime",
          "type": "value",
          "required": true
        },
        {
          "text": "easeType",
          "type": "enum:Easing",
          "required": true
        },
        {
          "text": "rot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "xRot",
          "type": "rotation",
          "required": true
        },
        {
          "text": "yRot",
          "type": "rotation",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "preset",
          "type": "enum:CameraPresets",
          "required": true
        },
        {
          "text": "ease",
          "type": "keyword",
          "required": true
        },
        {
          "text": "easeTime",
          "type": "value",
          "required": true
        },
        {
          "text": "easeType",
          "type": "enum:Easing",
          "required": true
        },
        {
          "text": "facing",
          "type": "keyword",
          "required": true
        },
        {
          "text": "lookAtEntity",
          "type": "selector",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "preset",
          "type": "enum:CameraPresets",
          "required": true
        },
        {
          "text": "ease",
          "type": "keyword",
          "required": true
        },
        {
          "text": "easeTime",
          "type": "value",
          "required": true
        },
        {
          "text": "easeType",
          "type": "enum:Easing",
          "required": true
        },
        {
          "text": "facing",
          "type": "keyword",
          "required": true
        },
        {
          "text": "lookAtPosition",
          "type": "unknown",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "preset",
          "type": "enum:CameraPresets",
          "required": true
        },
        {
          "text": "ease",
          "type": "keyword",
          "required": true
        },
        {
          "text": "easeTime",
          "type": "value",
          "required": true
        },
        {
          "text": "easeType",
          "type": "enum:Easing",
          "required": true
        },
        {
          "text": "default",
          "type": "keyword",
          "required": false
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "preset",
          "type": "enum:CameraPresets",
          "required": true
        },
        {
          "text": "pos",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position",
          "type": "unknown",
          "required": true
        },
        {
          "text": "rot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "xRot",
          "type": "rotation",
          "required": true
        },
        {
          "text": "yRot",
          "type": "rotation",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "preset",
          "type": "enum:CameraPresets",
          "required": true
        },
        {
          "text": "pos",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position",
          "type": "unknown",
          "required": true
        },
        {
          "text": "facing",
          "type": "keyword",
          "required": true
        },
        {
          "text": "lookAtEntity",
          "type": "selector",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "preset",
          "type": "enum:CameraPresets",
          "required": true
        },
        {
          "text": "pos",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position",
          "type": "unknown",
          "required": true
        },
        {
          "text": "facing",
          "type": "keyword",
          "required": true
        },
        {
          "text": "lookAtPosition",
          "type": "unknown",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "preset",
          "type": "enum:CameraPresets",
          "required": true
        },
        {
          "text": "pos",
          "type": "keyword",
          "required": true
        },
        {
          "text": "position",
          "type": "unknown",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "preset",
          "type": "enum:CameraPresets",
          "required": true
        },
        {
          "text": "rot",
          "type": "keyword",
          "required": true
        },
        {
          "text": "xRot",
          "type": "rotation",
          "required": true
        },
        {
          "text": "yRot",
          "type": "rotation",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "preset",
          "type": "enum:CameraPresets",
          "required": true
        },
        {
          "text": "facing",
          "type": "keyword",
          "required": true
        },
        {
          "text": "lookAtEntity",
          "type": "selector",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "preset",
          "type": "enum:CameraPresets",
          "required": true
        },
        {
          "text": "facing",
          "type": "keyword",
          "required": true
        },
        {
          "text": "lookAtPosition",
          "type": "unknown",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "set",
          "type": "keyword",
          "required": true
        },
        {
          "text": "preset",
          "type": "enum:CameraPresets",
          "required": true
        },
        {
          "text": "default",
          "type": "keyword",
          "required": false
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "clear",
          "type": "keyword",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "fade",
          "type": "keyword",
          "required": true
        },
        {
          "text": "time",
          "type": "keyword",
          "required": true
        },
        {
          "text": "fadeInSeconds",
          "type": "value",
          "required": true
        },
        {
          "text": "holdSeconds",
          "type": "value",
          "required": true
        },
        {
          "text": "fadeOutSeconds",
          "type": "value",
          "required": true
        },
        {
          "text": "color",
          "type": "keyword",
          "required": true
        },
        {
          "text": "red",
          "type": "integer",
          "required": true
        },
        {
          "text": "green",
          "type": "integer",
          "required": true
        },
        {
          "text": "blue",
          "type": "integer",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "fade",
          "type": "keyword",
          "required": true
        },
        {
          "text": "time",
          "type": "keyword",
          "required": true
        },
        {
          "text": "fadeInSeconds",
          "type": "value",
          "required": true
        },
        {
          "text": "holdSeconds",
          "type": "value",
          "required": true
        },
        {
          "text": "fadeOutSeconds",
          "type": "value",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "fade",
          "type": "keyword",
          "required": true
        },
        {
          "text": "color",
          "type": "keyword",
          "required": true
        },
        {
          "text": "red",
          "type": "integer",
          "required": true
        },
        {
          "text": "green",
          "type": "integer",
          "required": true
        },
        {
          "text": "blue",
          "type": "integer",
          "required": true
        }
      ]
    },
    {
      "name": "camera",
      "documentation": "Issues a camera instruction",
      "parameters": [
        {
          "text": "camera",
          "type": "keyword",
          "required": true
        },
        {
          "text": "players",
          "type": "selector",
          "required": true
        },
        {
          "text": "fade",
          "type": "keyword",
          "required": true
        }
      ]
    }
  ]
};
