/** The interface for a command */
export interface Command {
  /** The name of the command */
  name: string;
  /** The documentation of this command */
  documentation: string;
  /** The syntaxes of this command */
  syntaxes: CommandSyntax[];
  /** The permission level needed for this command */
  permissionLevel: number;
  /** Whether or not this command requires cheats to be enabled */
  requiresCheatsEnabled: boolean;
}

/** The interface for a syntax of a command */
export interface CommandSyntax {
  /** The name of the command */
  name: string;
  /** The documentation of this specific syntax */
  documentation: string;
  /** The parameters of this command */
  parameters: ParameterSyntax[];
}

/** The interface for a parameter of a command */
export interface ParameterSyntax {
  /**The text/keyword of the parameter.*/
  text: string;
  /**The type of the parameter.*/
  type: ParameterType;
  /**True if this parameter is required, else false.*/
  required: boolean;

  /**The optional options for this parameter.*/
  options?: ParameterOptions;
}

/**The optional options for a given parameter.*/
export interface ParameterOptions {
  /**if defined, these values are always accepted, no evaluation anymore required.*/
  acceptedValues?: string[];

  /**Minimum value or amount of numbers.*/
  minimum?: number;
  /**Maximum value or amount of numbers.*/
  maximum?: number;

  /**Whether or not this parameter is aimed at players only, excluding entities .*/
  playerOnly?: boolean;
  /**Whether or not fake / dummy players are allowed.*/
  allowFakePlayers?: boolean;

  /**If the wild card: '*' is allowed.*/
  wildcard?: boolean;
}

/** The type a parameter can have */
export type ParameterType =
  | "block_states"
  | "boolean"
  | "command"
  | "coordinate:float"
  | "coordinate:integer"
  | "gametest:name"
  | "gametest:tag"
  | "integer"
  | "json:rawtext"
  | "json"
  | "keyword"
  | "level"
  | "mcfunction"
  | "message"
  | "operator:comparison"
  | "operator"
  | "player"
  | "range:integer"
  | "rotation"
  | "scoreboard:objective"
  | "selector"
  | "string"
  | "tag"
  | "unknown"
  | `enum:${string}`
  | "value";
