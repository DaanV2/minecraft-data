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
