import { Builder } from "./base/builder";
import { FileBuilder } from "./base/file-builder";

export function saveBlocks(builder: Builder) {
  saveAllBlocksProperties(builder);
  saveAllBlocks(builder);
}

function saveAllBlocks(builder: Builder) {
  const blocksFile = new FileBuilder("src/blocks/blocks.auto.ts");
  blocksFile
    .appendLine(`import { Block } from "./interface";`)
    .appendLineBreak()
    .appendLine(`export const Blocks: Record<string, Block> = {`);

  for (const blockName in builder.blocks) {
    const data = builder.blocks[blockName];

    blocksFile.appendLine(
      `  "${blockName}": ${JSON.stringify(data, null, 2)},`
    );
  }

  blocksFile.appendLine(`};`);

  //Namespace
  blocksFile.save();
}

function saveAllBlocksProperties(builder: Builder) {
  const propertiesFile = new FileBuilder(
    "src/block-properties/block-properties.auto.ts"
  );
  propertiesFile
      .appendLine(`import { BlockProperty } from "./interface";

export type BlockPropertyNames = keyof typeof data;

/** The namespace that access the block properties */
export namespace BlockProperties {
  /**
   * Check if the given property name exists
   * @param name The name of the property
   * @returns true if the property exists
   */
  export function has(name: BlockPropertyNames): boolean {
    return name in data;
  }

  /**
   * Get the property by name
   * @param name The name of the property
   * @returns The property or undefined if not found
   */
  export function get(name: BlockPropertyNames): BlockProperty | undefined {
    return (data as Record<string, BlockProperty>)[name];
  }

  /**
   * Get all properties
   * @returns All properties
   */
  export function properties(): Record<BlockPropertyNames, BlockProperty> {
    return data as Record<BlockPropertyNames, BlockProperty>;
  }
}`)
      .appendLineBreak()
      .appendLine("const data = {");

  for (const propertyName in builder.block_properties) {
    const data = builder.block_properties[propertyName];

    propertiesFile.appendLine(
      `  "${propertyName}": ${JSON.stringify(data, null, 2)},`
    );
  }

  propertiesFile.appendLine(`};`);

  propertiesFile.save();
}
