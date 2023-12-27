import { Enum } from "../../src/enums/interface";

export interface Builder {
  enums: Record<string, Enum>;
  commands: Record<string, any>;
  entities: Record<string, any>;
}