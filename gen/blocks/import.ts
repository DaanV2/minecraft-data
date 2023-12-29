import * as data from "../../bedrock-samples/metadata/vanilladata_modules/mojang-blocks.json";
import { BlockProperty } from "../../src/block-properties/interface";
import { Builder } from "../base/builder";

export function generateFromBlocks(builder: Builder) {
  blockProperties(builder);
}

function blockProperties(builder: Builder) {
  data.block_properties.forEach((blockProperty) => {
    const p = convertBlockProperty(blockProperty);

    builder.block_properties[blockProperty.name] = p;
  });
}

function convertBlockProperty(
  property: (typeof data.block_properties)[0]
): BlockProperty {
  switch (property.type) {
    case "bool":
      return {
        name: property.name,
        type: "bool",
        values: property.values.map((v) => v.value as boolean),
      };

    case "int":
      return {
        name: property.name,
        type: "int",
        values: property.values.map((v) => v.value as number),
      };

    case "string":
      return {
        name: property.name,
        type: "string",
        values: property.values.map((v) => v.value as string),
      };

    default:
      throw new Error(`Unknown block property type: ${property.type}`);
  }
}
