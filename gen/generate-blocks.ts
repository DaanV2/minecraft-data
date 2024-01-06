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
    .appendLine(`export const blockData: Record<string, Block> = {`);

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
      .appendLine("export const blockPropertyData = {");

  for (const propertyName in builder.block_properties) {
    const data = builder.block_properties[propertyName];

    propertiesFile.appendLine(
      `  "${propertyName}": ${JSON.stringify(data, null, 2)},`
    );
  }

  propertiesFile.appendLine(`};`);

  propertiesFile.save();
}
