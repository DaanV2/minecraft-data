/** Interface for enums */
export interface Enum {
  /** Name of the enum */
  name: string;
  /** Description of the enum */
  description?: string;
  /** Values of the enum */
  values: EnumValue[];
}

/** Interface for enum values */
export interface EnumValue {
  /** Name of the enum value */
  value: string;
  /** Description of the enum value */
  description?: string;
}

/** A class that acts and handles as a enum */
export class EnumHandler implements Enum {
  private _data: Enum

  constructor(data: Enum) {
    this._data = data;
  }

  /** @inheritdoc */
  get name(): string {
    return this._data.name;
  }

  /** @inheritdoc */
  set name(value: string) {
    this._data.name = value;
  }

  /** @inheritdoc */
  get description(): string | undefined {
    return this._data.description;
  }

  /** @inheritdoc */
  set description(value: string | undefined) {
    this._data.description = value;
  }

  /** @inheritdoc */
  get values(): EnumValue[] {
    return this._data.values;
  }

  /** @inheritdoc */
  set values(value: EnumValue[]) {
    this._data.values = value;
  }

  /**
   * Checks if the enum has a value
   * @param value The name to find
   * @returns If the enum has the value
   */
  hasValue(value: string): boolean {
    return this.values.some(v => v.value === value);
  }

  /**
   * Gets a value from the enum
   * @param value The name to find
   * @returns The value or undefined
   */
  getValue(value: string): EnumValue | undefined {
    return this.values.find(v => v.value === value);
  }
}