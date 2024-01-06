import { BlockPropertyNames } from "../block-properties/block-properties.auto";
import { blockData } from "./blocks.auto";

export interface Block {
  name: string;
  properties: BlockPropertyNames[];
}

/**
 * The namespace that access the blocks
 */
export namespace Blocks {
  /**
   * Get all blocks
   * @returns All blocks
   */
  export function get(name: string): Block | undefined {
    return blockData[name];
  }

  /**
   * Check if the given block name exists
   * @param name The name of the block
   * @returns true if the block exists
   */
  export function has(name: string): boolean {
    return name in blockData;
  }

  /**
   * Get all blocks
   * @returns All blocks
   */
  export function blocks(): Record<string, Block> {
    return blockData;
  }

  /**
   * Get all block ids
   * @returns All block ids
   */
  export function getBlockIds(): string[] {
    return Object.keys(blockData);
  }
}
