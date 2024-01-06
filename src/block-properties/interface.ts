import { blockPropertyData } from "./block-properties.auto";

export type BlockProperty = BlockPropertyBool | BlockPropertyInt | BlockPropertyString;

export interface BlockPropertyBool {
  /** The name of this property */
  name: string;
  /** The type of this property is a bool*/
  type: "bool";
  /** The string values of this property */
  values: boolean[];
}

export interface BlockPropertyInt {
  /** The name of this property */
  name: string;
  /** The type of this property is a int*/
  type: "int";
  /** The string values of this property */
  values: number[];
}

export interface BlockPropertyString {
  /** The name of this property */
  name: string;
  /** The type of this property is a string*/
  type: "string";
  /** The string values of this property */
  values: string[];
}


export type BlockPropertyNames = keyof typeof blockPropertyData;

/** The namespace that access the block properties */
export namespace BlockProperties {
  /**
   * Check if the given property name exists
   * @param name The name of the property
   * @returns true if the property exists
   */
  export function has(name: BlockPropertyNames): boolean {
    return name in blockPropertyData;
  }

  /**
   * Get the property by name
   * @param name The name of the property
   * @returns The property or undefined if not found
   */
  export function get(name: BlockPropertyNames): BlockProperty | undefined {
    return (blockPropertyData as Record<string, BlockProperty>)[name];
  }

  /**
   * Get all properties
   * @returns All properties
   */
  export function properties(): Record<BlockPropertyNames, BlockProperty> {
    return blockPropertyData as Record<BlockPropertyNames, BlockProperty>;
  }
}